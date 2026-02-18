#!/bin/bash

###############################################################################
# JusMoto - Domain and SSL Setup Script
# This script configures your domain and installs SSL certificate
###############################################################################

# IMPORTANT: Replace these variables before running
DOMAIN="your-subdomain.yourdomain.com"  # Change this to your actual subdomain
EMAIL="your-email@example.com"          # Change this to your email

echo "=========================================="
echo "JusMoto Domain & SSL Setup"
echo "Domain: $DOMAIN"
echo "=========================================="

# Check if variables are set
if [ "$DOMAIN" = "your-subdomain.yourdomain.com" ]; then
    echo "ERROR: Please edit this script and set your actual domain!"
    echo "Open the script and change DOMAIN and EMAIL variables."
    exit 1
fi

echo ""
echo "[1/6] Testing DNS resolution..."
DNS_IP=$(dig +short $DOMAIN | tail -n1)
CURRENT_IP=$(curl -s http://checkip.amazonaws.com)

echo "Domain resolves to: $DNS_IP"
echo "Server IP is: $CURRENT_IP"

if [ "$DNS_IP" != "$CURRENT_IP" ]; then
    echo "WARNING: DNS is not pointing to this server yet!"
    echo "Please wait for DNS propagation (5-30 minutes)"
    echo "Then run this script again."
    exit 1
fi

echo "✓ DNS is correctly configured!"

echo ""
echo "[2/6] Updating Nginx configuration with domain..."
sudo sed -i "s/server_name .*/server_name $DOMAIN;/" /etc/nginx/sites-available/jusmoto
sudo nginx -t

echo ""
echo "[3/6] Restarting Nginx..."
sudo systemctl restart nginx

echo ""
echo "[4/6] Installing SSL certificate with Let's Encrypt..."
sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email $EMAIL --redirect

echo ""
echo "[5/6] Updating Laravel .env file..."
cd /var/www/jusmoto/core
sudo sed -i "s|APP_URL=.*|APP_URL=https://$DOMAIN|" .env

# Clear Laravel cache
sudo -u www-data php artisan config:clear
sudo -u www-data php artisan cache:clear
sudo -u www-data php artisan config:cache

echo ""
echo "[6/6] Setting up SSL auto-renewal..."
sudo systemctl status certbot.timer | head -n 5

echo ""
echo "=========================================="
echo "Setup Complete!"
echo "=========================================="
echo ""
echo "Your website is now available at:"
echo "https://$DOMAIN"
echo ""
echo "SSL certificate will auto-renew every 60 days."
echo ""
echo "To verify SSL:"
echo "curl -I https://$DOMAIN"
echo ""
