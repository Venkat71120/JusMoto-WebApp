# Database Migration Guide

## Option 1: Migrate from Existing MySQL Database

If you have an existing database at `auth-db1110.hstgr.io`, follow these steps to migrate to your EC2 instance.

### Step 1: Export Database from Current Host

```bash
# From your local machine, export the database
mysqldump -h auth-db1110.hstgr.io -u u140987190_jusmoto -p u140987190_jusmoto > jusmoto_backup.sql

# When prompted, enter password: JusMoto@7
```

### Step 2: Upload Database Dump to EC2

```bash
# Upload the SQL dump to your EC2 instance
scp -i jusmoto-key.pem jusmoto_backup.sql ubuntu@YOUR_EC2_IP:/tmp/
```

### Step 3: Import to EC2 MySQL

```bash
# SSH into your EC2 instance
ssh -i jusmoto-key.pem ubuntu@YOUR_EC2_IP

# Import the database
mysql -u jusmoto_user -p jusmoto_db < /tmp/jusmoto_backup.sql

# Clean up
rm /tmp/jusmoto_backup.sql
```

---

## Option 2: Fresh Database Installation

If you want to start fresh, run Laravel migrations:

```bash
cd /var/www/jusmoto/core

# Run migrations
php artisan migrate --force

# Run seeders (if any)
php artisan db:seed --force
```

---

## Option 3: Keep Using Remote Database (Not Recommended for Cost)

You can continue using your existing remote database temporarily:

In your `.env` file:
```env
DB_CONNECTION=mysql
DB_HOST=auth-db1110.hstgr.io
DB_PORT=3306
DB_DATABASE=u140987190_jusmoto
DB_USERNAME=u140987190_jusmoto
DB_PASSWORD=JusMoto@7
```

**Note**: This will incur data transfer costs and slower performance. Recommended to migrate to local MySQL.

---

## Verify Database Connection

```bash
cd /var/www/jusmoto/core

# Test database connection
php artisan tinker

# In tinker, run:
DB::connection()->getPdo();

# If successful, you'll see PDO object details
# Press Ctrl+C to exit tinker
```

---

## Troubleshooting

### Connection Refused
```bash
# Check MySQL is running
sudo systemctl status mysql

# Check if MySQL is listening
sudo netstat -tlnp | grep 3306

# Restart MySQL
sudo systemctl restart mysql
```

### Access Denied
```bash
# Verify user permissions
sudo mysql

SHOW GRANTS FOR 'jusmoto_user'@'localhost';
EXIT;

# Re-grant permissions if needed
GRANT ALL PRIVILEGES ON jusmoto_db.* TO 'jusmoto_user'@'localhost';
FLUSH PRIVILEGES;
```

### Import Errors
```bash
# Check for specific errors in the import
mysql -u jusmoto_user -p jusmoto_db < backup.sql 2> import_errors.log

# View errors
cat import_errors.log
```
