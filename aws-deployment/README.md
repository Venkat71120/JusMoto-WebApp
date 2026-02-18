# JusMoto AWS Deployment Guide - Cost-Efficient Setup

## Overview
This guide will help you deploy JusMoto-WebApp on a single EC2 instance with MySQL database for maximum cost efficiency.

## Estimated Monthly Cost: $10-20 (or FREE with AWS Free Tier)

---

## Step 1: Launch EC2 Instance

### 1.1 AWS Console Setup
1. Go to AWS Console → EC2 → Launch Instance
2. **Name**: `jusmoto-webapp`
3. **AMI**: Ubuntu Server 22.04 LTS (Free tier eligible)
4. **Instance Type**: `t3.micro` (Free tier) or `t3.small` ($15/month - recommended for production)
5. **Key Pair**: Create new key pair and download `jusmoto-key.pem`
6. **Network Settings**:
   - Create security group with name `jusmoto-sg`
   - Allow SSH (port 22) from your IP
   - Allow HTTP (port 80) from anywhere
   - Allow HTTPS (port 443) from anywhere
7. **Storage**: 20-30 GB gp3
8. Click **Launch Instance**

### 1.2 Get Instance Details
After instance is running:
- Note down the **Public IP address**
- Note down the **Public DNS**

---

## Step 2: Connect to EC2 Instance

### Windows (Using PowerShell or Git Bash):
```bash
# Set permissions on key file (if using Git Bash)
chmod 400 jusmoto-key.pem

# Connect to instance
ssh -i jusmoto-key.pem ubuntu@YOUR_EC2_PUBLIC_IP
```

### Alternative (Using PuTTY on Windows):
1. Convert .pem to .ppk using PuTTYgen
2. Use PuTTY to connect with the .ppk key

---

## Step 3: Run Server Setup Script

Once connected to your EC2 instance, run:

```bash
# Download setup script
wget https://raw.githubusercontent.com/YOUR-REPO/aws-deployment/server-setup.sh
# Or manually copy the server-setup.sh script from this folder

chmod +x server-setup.sh
sudo ./server-setup.sh
```

This script will install:
- PHP 8.2
- MySQL 8.0
- Nginx
- Composer
- Node.js & NPM
- SSL certificates (Let's Encrypt)

---

## Step 4: Deploy Application

```bash
# Clone or upload your application
cd /var/www
sudo git clone YOUR_REPOSITORY_URL jusmoto
# OR upload via SCP/SFTP

cd jusmoto/core

# Install dependencies
sudo composer install --optimize-autoloader --no-dev
sudo npm install
sudo npm run build

# Set permissions
sudo chown -R www-data:www-data /var/www/jusmoto
sudo chmod -R 755 /var/www/jusmoto
sudo chmod -R 775 /var/www/jusmoto/core/storage
sudo chmod -R 775 /var/www/jusmoto/core/bootstrap/cache
```

---

## Step 5: Configure Database

```bash
# Login to MySQL
sudo mysql

# Run these SQL commands:
CREATE DATABASE jusmoto_db;
CREATE USER 'jusmoto_user'@'localhost' IDENTIFIED BY 'YOUR_STRONG_PASSWORD';
GRANT ALL PRIVILEGES ON jusmoto_db.* TO 'jusmoto_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;

# Import existing database (if you have a dump)
mysql -u jusmoto_user -p jusmoto_db < your_database_dump.sql
```

---

## Step 6: Configure Application

```bash
cd /var/www/jusmoto/core

# Copy environment file
sudo cp .env.example .env

# Edit .env file
sudo nano .env
```

Update these values in `.env`:
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=http://YOUR_EC2_PUBLIC_IP

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=jusmoto_db
DB_USERNAME=jusmoto_user
DB_PASSWORD=YOUR_STRONG_PASSWORD
```

```bash
# Generate application key
sudo php artisan key:generate

# Run migrations
sudo php artisan migrate --force

# Cache configuration
sudo php artisan config:cache
sudo php artisan route:cache
sudo php artisan view:cache

# Create storage link
sudo php artisan storage:link
```

---

## Step 7: Configure Nginx

```bash
# Copy nginx configuration
sudo cp /var/www/jusmoto/aws-deployment/nginx-config.conf /etc/nginx/sites-available/jusmoto

# Enable site
sudo ln -s /etc/nginx/sites-available/jusmoto /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

---

## Step 8: Configure Domain (Optional)

If you have a domain:

1. Point your domain's A record to your EC2 Public IP
2. Update `.env` file with your domain:
   ```env
   APP_URL=https://yourdomain.com
   ```

3. Install SSL certificate:
   ```bash
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

---

## Step 9: Set Up Automatic Backups (Important!)

```bash
# Create backup script
sudo nano /usr/local/bin/backup-jusmoto.sh
```

Paste the backup script content, then:
```bash
sudo chmod +x /usr/local/bin/backup-jusmoto.sh

# Schedule daily backups at 2 AM
sudo crontab -e
# Add this line:
0 2 * * * /usr/local/bin/backup-jusmoto.sh
```

---

## Monitoring & Maintenance

### Check Application Logs
```bash
tail -f /var/www/jusmoto/core/storage/logs/laravel.log
```

### Check Nginx Logs
```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Check MySQL Status
```bash
sudo systemctl status mysql
```

### Restart Services
```bash
sudo systemctl restart nginx
sudo systemctl restart mysql
sudo systemctl restart php8.2-fpm
```

---

## Cost Optimization Tips

1. **Use AWS Free Tier**: t3.micro is free for 12 months
2. **Reserved Instances**: Save 30-60% for 1-year commitment
3. **Stop instance when not needed**: Only for development
4. **Use CloudWatch alarms**: Monitor usage and costs
5. **Clean old logs**: Set up log rotation

---

## Troubleshooting

### Issue: 502 Bad Gateway
```bash
# Check PHP-FPM status
sudo systemctl status php8.2-fpm
sudo systemctl restart php8.2-fpm
```

### Issue: Permission Denied
```bash
sudo chown -R www-data:www-data /var/www/jusmoto
sudo chmod -R 755 /var/www/jusmoto
```

### Issue: Database Connection Error
```bash
# Check MySQL is running
sudo systemctl status mysql

# Check credentials in .env file
cat /var/www/jusmoto/core/.env | grep DB_
```

---

## Security Checklist

- [ ] Change default MySQL root password
- [ ] Use strong passwords for database user
- [ ] Keep APP_DEBUG=false in production
- [ ] Set up firewall (UFW)
- [ ] Regular security updates: `sudo apt update && sudo apt upgrade`
- [ ] Set up automated backups
- [ ] Use HTTPS with SSL certificate
- [ ] Restrict SSH access to your IP only

---

## Support

For issues, check:
- Application logs: `/var/www/jusmoto/core/storage/logs/`
- Nginx logs: `/var/log/nginx/`
- PHP-FPM logs: `/var/log/php8.2-fpm.log`
