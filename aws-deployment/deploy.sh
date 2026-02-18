#!/bin/bash

###############################################################################
# JusMoto Deployment Script
# This script deploys updates to the JusMoto application
###############################################################################

set -e

APP_DIR="/var/www/jusmoto/core"
BACKUP_DIR="/var/backups/jusmoto"

echo "=========================================="
echo "JusMoto Deployment Script"
echo "=========================================="

# Check if running as sudo
if [ "$EUID" -ne 0 ]; then
    echo "Please run with sudo: sudo ./deploy.sh"
    exit 1
fi

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

echo ""
echo "[1/10] Creating backup..."
BACKUP_FILE="$BACKUP_DIR/backup-$(date +%Y%m%d-%H%M%S).tar.gz"
cd /var/www/jusmoto
tar -czf $BACKUP_FILE core/storage core/public/uploads core/.env 2>/dev/null || true
echo "Backup created: $BACKUP_FILE"

echo ""
echo "[2/10] Entering maintenance mode..."
cd $APP_DIR
php artisan down || true

echo ""
echo "[3/10] Pulling latest changes..."
cd /var/www/jusmoto
git pull origin main || echo "Git pull skipped (not using git)"

echo ""
echo "[4/10] Installing/updating Composer dependencies..."
cd $APP_DIR
composer install --optimize-autoloader --no-dev

echo ""
echo "[5/10] Installing/updating NPM dependencies..."
npm install

echo ""
echo "[6/10] Building assets..."
npm run build

echo ""
echo "[7/10] Running database migrations..."
php artisan migrate --force

echo ""
echo "[8/10] Clearing and caching configuration..."
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear

php artisan config:cache
php artisan route:cache
php artisan view:cache

echo ""
echo "[9/10] Setting permissions..."
chown -R www-data:www-data /var/www/jusmoto
chmod -R 755 /var/www/jusmoto
chmod -R 775 $APP_DIR/storage
chmod -R 775 $APP_DIR/bootstrap/cache

echo ""
echo "[10/10] Bringing application back online..."
php artisan up

echo ""
echo "[FINAL] Restarting services..."
systemctl restart php8.2-fpm
systemctl reload nginx

echo ""
echo "=========================================="
echo "Deployment Complete!"
echo "=========================================="
echo ""
echo "Backup location: $BACKUP_FILE"
echo ""
echo "To verify deployment:"
echo "1. Check application logs: tail -f $APP_DIR/storage/logs/laravel.log"
echo "2. Check Nginx logs: tail -f /var/log/nginx/jusmoto-error.log"
echo "3. Visit your website to test"
echo ""
