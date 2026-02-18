# JusMoto AWS Deployment - Quick Start Checklist

Use this checklist to deploy JusMoto to AWS EC2 in the most cost-efficient way.

---

## Prerequisites
- [x] AWS Account created
- [x] Credit card added to AWS (for charges beyond free tier)
- [ ] SSH client installed (PuTTY for Windows or built-in SSH)

---

## Phase 1: AWS Setup (15 minutes)

- [x] **1.1** Log into AWS Console
- [x] **1.2** Go to EC2 → Launch Instance
- [x] **1.3** Configure instance:
  - Name: `jusmoto-webapp`
  - AMI: Ubuntu Server 22.04 LTS
  - Instance type: `t3.micro` (free tier) or `t3.small` (recommended)
  - Create key pair: `jusmoto-key.pem` and download it
- [x] **1.4** Configure security group:
  - SSH (22) from My IP
  - HTTP (80) from Anywhere
  - HTTPS (443) from Anywhere
- [x] **1.5** Storage: 20-30 GB gp3
- [x] **1.6** Launch instance
- [x] **1.7** Note down Public IP address: `16.112.128.19`

---

## Phase 2: Server Setup (30 minutes)

- [ ] **2.1** Connect to EC2 via SSH:
  ```bash
  ssh -i jusmoto-key.pem ubuntu@YOUR_EC2_IP
  ```

- [ ] **2.2** Upload server setup script:
  ```bash
  # From your local machine
  scp -i jusmoto-key.pem aws-deployment/server-setup.sh ubuntu@YOUR_EC2_IP:/home/ubuntu/
  ```

- [ ] **2.3** Run server setup script on EC2:
  ```bash
  chmod +x server-setup.sh
  sudo ./server-setup.sh
  ```
  ⏱️ This will take 10-15 minutes

- [ ] **2.4** Change MySQL root password:
  ```bash
  sudo mysql
  ALTER USER 'root'@'localhost' IDENTIFIED BY 'YOUR_NEW_STRONG_PASSWORD';
  EXIT;
  ```

---

## Phase 3: Database Setup (10 minutes)

- [ ] **3.1** Create database and user:
  ```bash
  sudo mysql
  CREATE DATABASE jusmoto_db;
  CREATE USER 'jusmoto_user'@'localhost' IDENTIFIED BY 'YOUR_STRONG_PASSWORD';
  GRANT ALL PRIVILEGES ON jusmoto_db.* TO 'jusmoto_user'@'localhost';
  FLUSH PRIVILEGES;
  EXIT;
  ```

- [ ] **3.2** Note your database credentials:
  - Database: `jusmoto_db`
  - Username: `jusmoto_user`
  - Password: `__________________`

- [ ] **3.3** Import existing database (if you have one):
  ```bash
  # Export from old server
  mysqldump -h auth-db1110.hstgr.io -u u140987190_jusmoto -p u140987190_jusmoto > backup.sql

  # Upload to EC2
  scp -i jusmoto-key.pem backup.sql ubuntu@YOUR_EC2_IP:/tmp/

  # Import on EC2
  mysql -u jusmoto_user -p jusmoto_db < /tmp/backup.sql
  ```

---

## Phase 4: Application Deployment (20 minutes)

- [ ] **4.1** Upload application files to EC2:
  ```bash
  # Option A: Using Git
  cd /var/www
  sudo git clone YOUR_REPOSITORY_URL jusmoto

  # Option B: Using SCP from local machine
  scp -i jusmoto-key.pem -r core ubuntu@YOUR_EC2_IP:/tmp/
  sudo mv /tmp/core /var/www/jusmoto/core
  ```

- [ ] **4.2** Install dependencies:
  ```bash
  cd /var/www/jusmoto/core
  sudo composer install --optimize-autoloader --no-dev
  sudo npm install
  sudo npm run build
  ```

- [ ] **4.3** Configure environment:
  ```bash
  sudo cp .env.example .env
  sudo nano .env
  ```
  Update these values:
  - `APP_URL=http://YOUR_EC2_IP`
  - `DB_DATABASE=jusmoto_db`
  - `DB_USERNAME=jusmoto_user`
  - `DB_PASSWORD=YOUR_PASSWORD`

- [ ] **4.4** Generate app key and run migrations:
  ```bash
  sudo php artisan key:generate
  sudo php artisan migrate --force
  sudo php artisan storage:link
  sudo php artisan config:cache
  sudo php artisan route:cache
  sudo php artisan view:cache
  ```

- [ ] **4.5** Set permissions:
  ```bash
  sudo chown -R www-data:www-data /var/www/jusmoto
  sudo chmod -R 755 /var/www/jusmoto
  sudo chmod -R 775 /var/www/jusmoto/core/storage
  sudo chmod -R 775 /var/www/jusmoto/core/bootstrap/cache
  ```

---

## Phase 5: Web Server Configuration (10 minutes)

- [ ] **5.1** Upload Nginx config:
  ```bash
  # From local machine
  scp -i jusmoto-key.pem aws-deployment/nginx-config.conf ubuntu@YOUR_EC2_IP:/tmp/
  ```

- [ ] **5.2** Configure Nginx:
  ```bash
  sudo cp /tmp/nginx-config.conf /etc/nginx/sites-available/jusmoto

  # Edit and replace YOUR_DOMAIN_OR_IP
  sudo nano /etc/nginx/sites-available/jusmoto

  # Enable site
  sudo ln -s /etc/nginx/sites-available/jusmoto /etc/nginx/sites-enabled/
  sudo rm /etc/nginx/sites-enabled/default

  # Test and restart
  sudo nginx -t
  sudo systemctl restart nginx
  ```

- [ ] **5.3** Test application:
  - Open browser: `http://YOUR_EC2_IP`
  - Verify application loads

---

## Phase 6: SSL Setup (Optional, 10 minutes)

**Only if you have a domain:**

- [ ] **6.1** Point domain A record to EC2 IP
- [ ] **6.2** Wait for DNS propagation (5-30 minutes)
- [ ] **6.3** Install SSL certificate:
  ```bash
  sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
  ```
- [ ] **6.4** Update `.env`:
  ```bash
  sudo nano /var/www/jusmoto/core/.env
  # Change APP_URL=https://yourdomain.com
  ```
- [ ] **6.5** Clear cache:
  ```bash
  cd /var/www/jusmoto/core
  sudo php artisan config:clear
  sudo php artisan config:cache
  ```

---

## Phase 7: Backup Setup (5 minutes)

- [ ] **7.1** Upload backup script:
  ```bash
  scp -i jusmoto-key.pem aws-deployment/backup.sh ubuntu@YOUR_EC2_IP:/tmp/
  sudo mv /tmp/backup.sh /usr/local/bin/backup-jusmoto.sh
  ```

- [ ] **7.2** Configure backup script:
  ```bash
  sudo nano /usr/local/bin/backup-jusmoto.sh
  # Update DB_PASSWORD with your database password

  sudo chmod +x /usr/local/bin/backup-jusmoto.sh
  ```

- [ ] **7.3** Schedule automatic backups:
  ```bash
  sudo crontab -e
  # Add this line:
  0 2 * * * /usr/local/bin/backup-jusmoto.sh
  ```

- [ ] **7.4** Test backup:
  ```bash
  sudo /usr/local/bin/backup-jusmoto.sh
  ```

---

## Phase 8: Final Verification (5 minutes)

- [ ] **8.1** Test website functionality
- [ ] **8.2** Check application logs:
  ```bash
  tail -f /var/www/jusmoto/core/storage/logs/laravel.log
  ```
- [ ] **8.3** Check Nginx logs:
  ```bash
  sudo tail -f /var/log/nginx/jusmoto-error.log
  ```
- [ ] **8.4** Verify database connection
- [ ] **8.5** Test user authentication
- [ ] **8.6** Test file uploads
- [ ] **8.7** Verify email sending

---

## Post-Deployment

### Important Information to Save:
```
EC2 Public IP: _____________________
Database Name: jusmoto_db
Database User: jusmoto_user
Database Password: _____________________
MySQL Root Password: _____________________
SSH Key Location: _____________________
```

### Regular Maintenance Commands:
```bash
# View logs
tail -f /var/www/jusmoto/core/storage/logs/laravel.log

# Restart services
sudo systemctl restart nginx
sudo systemctl restart php8.2-fpm
sudo systemctl restart mysql

# Clear cache
cd /var/www/jusmoto/core
sudo php artisan cache:clear
sudo php artisan config:clear

# Run updates (use deploy.sh script)
sudo /var/www/jusmoto/aws-deployment/deploy.sh
```

---

## Estimated Total Time: 1.5 - 2 hours

## Estimated Monthly Cost: $10-20 (or FREE with AWS Free Tier)

---

## Need Help?

Check these files:
- `README.md` - Full detailed instructions
- `database-migration.md` - Database migration details
- Troubleshooting section in README.md

---

## ✅ Deployment Complete!

Your JusMoto application should now be live at:
- **HTTP**: http://YOUR_EC2_IP
- **HTTPS** (if configured): https://yourdomain.com

🎉 Congratulations!
