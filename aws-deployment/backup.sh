#!/bin/bash

###############################################################################
# JusMoto Automated Backup Script
# Schedule this with cron: 0 2 * * * /usr/local/bin/backup-jusmoto.sh
###############################################################################

set -e

# Configuration
APP_DIR="/var/www/jusmoto/core"
BACKUP_DIR="/var/backups/jusmoto"
DB_NAME="jusmoto_db"
DB_USER="jusmoto_user"
DB_PASSWORD="YOUR_DATABASE_PASSWORD"  # Change this!
RETENTION_DAYS=7  # Keep backups for 7 days

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Generate timestamp
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
DATE=$(date +%Y-%m-%d)

echo "=========================================="
echo "JusMoto Backup - $TIMESTAMP"
echo "=========================================="

# Create daily directory
DAILY_DIR="$BACKUP_DIR/$DATE"
mkdir -p $DAILY_DIR

echo ""
echo "[1/4] Backing up database..."
mysqldump -u $DB_USER -p$DB_PASSWORD $DB_NAME | gzip > $DAILY_DIR/database-$TIMESTAMP.sql.gz
echo "Database backup created: $DAILY_DIR/database-$TIMESTAMP.sql.gz"

echo ""
echo "[2/4] Backing up storage files..."
tar -czf $DAILY_DIR/storage-$TIMESTAMP.tar.gz -C $APP_DIR storage
echo "Storage backup created: $DAILY_DIR/storage-$TIMESTAMP.tar.gz"

echo ""
echo "[3/4] Backing up uploads..."
if [ -d "$APP_DIR/public/uploads" ]; then
    tar -czf $DAILY_DIR/uploads-$TIMESTAMP.tar.gz -C $APP_DIR/public uploads
    echo "Uploads backup created: $DAILY_DIR/uploads-$TIMESTAMP.tar.gz"
else
    echo "No uploads directory found, skipping..."
fi

echo ""
echo "[4/4] Backing up .env file..."
cp $APP_DIR/.env $DAILY_DIR/env-$TIMESTAMP.txt
echo "Environment file backed up: $DAILY_DIR/env-$TIMESTAMP.txt"

echo ""
echo "Cleaning up old backups (older than $RETENTION_DAYS days)..."
find $BACKUP_DIR -type d -mtime +$RETENTION_DAYS -exec rm -rf {} + 2>/dev/null || true

echo ""
echo "Calculating backup sizes..."
TOTAL_SIZE=$(du -sh $BACKUP_DIR | cut -f1)
TODAY_SIZE=$(du -sh $DAILY_DIR | cut -f1)

echo ""
echo "=========================================="
echo "Backup Complete!"
echo "=========================================="
echo "Today's backup size: $TODAY_SIZE"
echo "Total backups size: $TOTAL_SIZE"
echo "Backup location: $DAILY_DIR"
echo ""

# Optional: Upload to S3 (uncomment if you want to use S3 for backups)
# echo "Uploading to S3..."
# aws s3 cp $DAILY_DIR s3://your-bucket-name/jusmoto-backups/$DATE/ --recursive

# Optional: Send notification (uncomment and configure if needed)
# echo "Backup completed successfully at $TIMESTAMP" | mail -s "JusMoto Backup Success" admin@yourdomain.com
