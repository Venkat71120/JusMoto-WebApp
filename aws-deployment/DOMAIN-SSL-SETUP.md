# Domain and SSL Setup Guide

Complete guide to set up your custom domain with SSL certificate for JusMoto-WebApp.

---

## Prerequisites

- Your subdomain/domain registered (e.g., `jusmoto.yourdomain.com`)
- Access to Hostinger DNS management
- SSH access to EC2 instance
- DNS propagation time: 5-30 minutes

---

## Step 1: Configure DNS at Hostinger

### 1.1 Login to Hostinger
- Go to: https://hpanel.hostinger.com/
- Login with your credentials

### 1.2 Navigate to DNS Zone
- Go to **Domains** section
- Click on your domain
- Click **DNS / Name Servers** or **DNS Zone**

### 1.3 Add A Record
Click **Add Record** or **Add new record**:

| Type | Name | Points to | TTL |
|------|------|-----------|-----|
| A | `your-subdomain` | `16.112.128.19` | 3600 |

**Examples:**
- For `app.yourdomain.com` → Name: `app`
- For `jusmoto.yourdomain.com` → Name: `jusmoto`
- For root domain `yourdomain.com` → Name: `@` or leave blank

### 1.4 Save Changes
- Click **Save** or **Add Record**
- Wait 5-30 minutes for DNS propagation

### 1.5 Verify DNS Propagation
Open Command Prompt and check:
```bash
nslookup your-subdomain.yourdomain.com
```

Should show IP: `16.112.128.19`

Or use online tool: https://dnschecker.org/

---

## Step 2: Wait for DNS Propagation

**Time Required**: 5-30 minutes (sometimes up to 48 hours)

**How to check:**
```bash
# From Windows
nslookup your-subdomain.yourdomain.com

# Or online
Go to: https://dnschecker.org/
Enter: your-subdomain.yourdomain.com
```

When you see `16.112.128.19` as the result, DNS is ready!

---

## Step 3: Install SSL Certificate

Once DNS is propagated, choose one of these methods:

### Method 1: Automated Script (Recommended)

1. **Edit the script with your details:**
   ```bash
   # On your local machine, edit:
   aws-deployment/setup-domain-ssl.sh

   # Change these lines:
   DOMAIN="your-subdomain.yourdomain.com"  # Your actual domain
   EMAIL="your-email@example.com"          # Your email
   ```

2. **Upload and run:**
   ```bash
   # Upload script
   scp -i aws-deployment/jusmoto.pem aws-deployment/setup-domain-ssl.sh ubuntu@16.112.128.19:/home/ubuntu/

   # SSH to server
   ssh -i aws-deployment/jusmoto.pem ubuntu@16.112.128.19

   # Run script
   chmod +x setup-domain-ssl.sh
   ./setup-domain-ssl.sh
   ```

### Method 2: Manual Step-by-Step

If you prefer manual setup or the script fails:

#### Step 3.1: Update Nginx Configuration
```bash
# SSH to server
ssh -i aws-deployment/jusmoto.pem ubuntu@16.112.128.19

# Edit Nginx config
sudo nano /etc/nginx/sites-available/jusmoto

# Change this line:
server_name 16.112.128.19;

# To:
server_name your-subdomain.yourdomain.com;

# Save (Ctrl+X, Y, Enter)

# Test config
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

#### Step 3.2: Install SSL Certificate with Certbot
```bash
# Install SSL certificate
sudo certbot --nginx -d your-subdomain.yourdomain.com

# Follow prompts:
# - Enter email address
# - Agree to Terms of Service (Y)
# - Share email with EFF (optional)
# - Redirect HTTP to HTTPS? (2 - Yes, recommended)
```

Certbot will:
- Obtain SSL certificate from Let's Encrypt
- Configure Nginx automatically
- Set up auto-renewal

#### Step 3.3: Update Laravel Configuration
```bash
cd /var/www/jusmoto/core

# Update .env file
sudo nano .env

# Change:
APP_URL=http://16.112.128.19

# To:
APP_URL=https://your-subdomain.yourdomain.com

# Save and exit

# Clear cache
sudo -u www-data php artisan config:clear
sudo -u www-data php artisan cache:clear
sudo -u www-data php artisan config:cache
```

#### Step 3.4: Verify SSL Installation
```bash
# Test HTTPS
curl -I https://your-subdomain.yourdomain.com

# Should return: HTTP/2 200
```

---

## Step 4: Verify Everything Works

### 4.1 Test Website
Open browser and go to:
```
https://your-subdomain.yourdomain.com
```

You should see:
- ✅ Green padlock icon (SSL working)
- ✅ Your JusMoto application loads
- ✅ Automatic redirect from HTTP to HTTPS

### 4.2 Check SSL Certificate
```bash
# From EC2
sudo certbot certificates

# Should show:
# Certificate Name: your-subdomain.yourdomain.com
# Expiry Date: [60 days from now]
# Certificate Path: /etc/letsencrypt/live/...
```

### 4.3 Verify Auto-Renewal
```bash
# Check renewal timer
sudo systemctl status certbot.timer

# Test renewal (dry run)
sudo certbot renew --dry-run
```

---

## Step 5: Update Nginx Configuration (Final Check)

Your `/etc/nginx/sites-available/jusmoto` should now look like:

```nginx
server {
    server_name your-subdomain.yourdomain.com;

    root /var/www/jusmoto/core/public;
    index index.php index.html;

    # ... (rest of configuration)

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/your-subdomain.yourdomain.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/your-subdomain.yourdomain.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    if ($host = your-subdomain.yourdomain.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name your-subdomain.yourdomain.com;
    return 404; # managed by Certbot
}
```

---

## SSL Certificate Auto-Renewal

### How It Works
- **Certbot automatically renews** certificates before expiry
- Renewal happens **every 60 days**
- Runs via **systemd timer** (no cron needed)

### Check Auto-Renewal Status
```bash
# Check timer status
sudo systemctl status certbot.timer

# View renewal logs
sudo journalctl -u certbot.timer

# Manually test renewal (doesn't actually renew)
sudo certbot renew --dry-run
```

### Manual Renewal (if needed)
```bash
sudo certbot renew
sudo systemctl restart nginx
```

---

## Troubleshooting

### Issue: DNS Not Resolving
```bash
# Check DNS
nslookup your-subdomain.yourdomain.com

# If not showing 16.112.128.19:
# - Wait longer (up to 48 hours)
# - Check Hostinger DNS settings
# - Try clearing DNS cache: ipconfig /flushdns
```

### Issue: Certbot Fails
```bash
# Check domain is accessible
curl -I http://your-subdomain.yourdomain.com

# If returns connection refused:
# - DNS not propagated yet
# - Nginx not running: sudo systemctl start nginx

# View Certbot logs
sudo tail -f /var/log/letsencrypt/letsencrypt.log
```

### Issue: Website Shows "Not Secure"
```bash
# Check SSL certificate
sudo certbot certificates

# Restart Nginx
sudo systemctl restart nginx

# Clear browser cache
# Use incognito/private window
```

### Issue: Mixed Content Warnings
- Some resources loading via HTTP instead of HTTPS
- Update `.env`: `APP_URL=https://yourdomain.com`
- Clear cache: `php artisan config:cache`
- Check database for hardcoded HTTP URLs

---

## Benefits of Using Custom Domain + SSL

### Before (IP Address):
- ❌ Hard to remember: `http://16.112.128.19`
- ❌ Not secure (no SSL)
- ❌ May be blocked by networks
- ❌ Not professional
- ❌ Bad for SEO

### After (Custom Domain):
- ✅ Easy to remember: `https://jusmoto.yourdomain.com`
- ✅ Secure (SSL encrypted)
- ✅ Better network accessibility
- ✅ Professional appearance
- ✅ Better SEO ranking
- ✅ Required for payment gateways
- ✅ Free SSL certificate (Let's Encrypt)

---

## Security Notes

### SSL Certificate Details
- **Provider**: Let's Encrypt (trusted worldwide)
- **Type**: Domain Validated (DV)
- **Encryption**: TLS 1.2, TLS 1.3
- **Validity**: 90 days (auto-renews every 60 days)
- **Cost**: FREE

### HTTPS Benefits
- Encrypts data between user and server
- Protects against man-in-the-middle attacks
- Required for modern web APIs
- Improves Google search ranking
- Required by payment processors

---

## Common Commands Reference

```bash
# View SSL certificate details
sudo certbot certificates

# Renew certificate manually
sudo certbot renew

# Test renewal (dry run)
sudo certbot renew --dry-run

# View Nginx config
sudo cat /etc/nginx/sites-available/jusmoto

# Restart services
sudo systemctl restart nginx
sudo systemctl restart php8.2-fpm

# Check SSL expiry
echo | openssl s_client -servername your-subdomain.yourdomain.com -connect your-subdomain.yourdomain.com:443 2>/dev/null | openssl x509 -noout -dates

# View certificate in browser
# Click padlock icon → Certificate → Details
```

---

## Multiple Domains (Optional)

To add multiple domains/subdomains to the same server:

```bash
# Add domain to Nginx
sudo nano /etc/nginx/sites-available/jusmoto

# Change:
server_name domain1.com;

# To:
server_name domain1.com domain2.com www.domain1.com;

# Get certificates for all
sudo certbot --nginx -d domain1.com -d www.domain1.com -d domain2.com
```

---

## FAQ

### Q: Do I need to pay for SSL?
**A**: No! Let's Encrypt provides free SSL certificates.

### Q: How long does SSL last?
**A**: 90 days, but auto-renews every 60 days automatically.

### Q: Can I use www and non-www?
**A**: Yes! Add both in DNS and include both in certbot command:
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### Q: What if certificate expires?
**A**: Auto-renewal should prevent this, but if it happens:
```bash
sudo certbot renew --force-renewal
```

### Q: Can I use my existing SSL from Hostinger?
**A**: No. SSL certificates are server-specific. You need a new one on EC2.

### Q: Does this work with CloudFlare?
**A**: Yes, but you may get double SSL. Disable CloudFlare proxy or use CloudFlare's Origin Certificate.

---

## Next Steps After SSL Setup

1. ✅ **Update Google Console** - Add HTTPS version
2. ✅ **Update Social Media Links** - Use HTTPS URLs
3. ✅ **Set up Google Analytics** - Update domain
4. ✅ **Configure Payment Gateways** - Update callback URLs to HTTPS
5. ✅ **Test all functionality** - Ensure nothing broke
6. ✅ **Set up monitoring** - Use UptimeRobot or similar
7. ✅ **Configure backups** - Important with custom domain

---

## Support

If you encounter issues:

1. **Check DNS**: https://dnschecker.org/
2. **Check SSL**: https://www.ssllabs.com/ssltest/
3. **Check Logs**:
   ```bash
   sudo tail -f /var/log/nginx/error.log
   sudo tail -f /var/log/letsencrypt/letsencrypt.log
   ```

---

**Deployment Date**: February 10, 2026
**Server IP**: 16.112.128.19
**SSL Provider**: Let's Encrypt
**Auto-Renewal**: Enabled
