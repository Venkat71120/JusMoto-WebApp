#!/bin/bash

###############################################################################
# JusMoto Web App - EC2 Server Setup Script
# This script installs and configures all necessary software for Laravel app
###############################################################################

set -e  # Exit on any error

echo "=========================================="
echo "JusMoto Server Setup - Starting..."
echo "=========================================="

# Update system
echo "Updating system packages..."
sudo apt update
sudo apt upgrade -y

# Install essential packages
echo "Installing essential packages..."
sudo apt install -y software-properties-common curl wget git unzip

# Add PHP repository
echo "Adding PHP 8.2 repository..."
sudo add-apt-repository -y ppa:ondrej/php
sudo apt update

# Install PHP 8.2 and extensions
echo "Installing PHP 8.2 and required extensions..."
sudo apt install -y php8.2 php8.2-fpm php8.2-cli php8.2-common php8.2-mysql \
    php8.2-zip php8.2-gd php8.2-mbstring php8.2-curl php8.2-xml php8.2-bcmath \
    php8.2-intl php8.2-soap php8.2-tokenizer php8.2-dom php8.2-xmlwriter \
    php8.2-fileinfo php8.2-imagick php8.2-redis

# Configure PHP
echo "Configuring PHP..."
sudo sed -i "s/upload_max_filesize = .*/upload_max_filesize = 100M/" /etc/php/8.2/fpm/php.ini
sudo sed -i "s/post_max_size = .*/post_max_size = 100M/" /etc/php/8.2/fpm/php.ini
sudo sed -i "s/memory_limit = .*/memory_limit = 512M/" /etc/php/8.2/fpm/php.ini
sudo sed -i "s/max_execution_time = .*/max_execution_time = 300/" /etc/php/8.2/fpm/php.ini

# Install Composer
echo "Installing Composer..."
cd /tmp
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
sudo chmod +x /usr/local/bin/composer

# Install MySQL
echo "Installing MySQL Server..."
sudo apt install -y mysql-server

# Secure MySQL installation
echo "Securing MySQL installation..."
sudo mysql -e "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ChangeThisRootPassword123!';"
sudo mysql -e "DELETE FROM mysql.user WHERE User='';"
sudo mysql -e "DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1');"
sudo mysql -e "DROP DATABASE IF EXISTS test;"
sudo mysql -e "DELETE FROM mysql.db WHERE Db='test' OR Db='test\\_%';"
sudo mysql -e "FLUSH PRIVILEGES;"

# Configure MySQL
echo "Configuring MySQL..."
sudo bash -c 'cat >> /etc/mysql/mysql.conf.d/mysqld.cnf <<EOF

# Custom settings for JusMoto
max_connections = 200
innodb_buffer_pool_size = 512M
innodb_log_file_size = 128M
EOF'

sudo systemctl restart mysql

# Install Nginx
echo "Installing Nginx..."
sudo apt install -y nginx

# Install Node.js and NPM
echo "Installing Node.js and NPM..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installations
echo "Verifying installations..."
echo "PHP version:"
php -v
echo ""
echo "Composer version:"
composer --version
echo ""
echo "MySQL version:"
mysql --version
echo ""
echo "Nginx version:"
nginx -v
echo ""
echo "Node.js version:"
node -v
echo ""
echo "NPM version:"
npm -v

# Install Certbot for SSL (Let's Encrypt)
echo "Installing Certbot for SSL certificates..."
sudo apt install -y certbot python3-certbot-nginx

# Set up firewall
echo "Configuring firewall..."
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

# Create web directory
echo "Creating web directory..."
sudo mkdir -p /var/www/jusmoto
sudo chown -R $USER:www-data /var/www/jusmoto

# Start and enable services
echo "Starting and enabling services..."
sudo systemctl start php8.2-fpm
sudo systemctl enable php8.2-fpm
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl start mysql
sudo systemctl enable mysql

# Install supervisor (for Laravel queues if needed)
echo "Installing Supervisor..."
sudo apt install -y supervisor
sudo systemctl enable supervisor
sudo systemctl start supervisor

echo ""
echo "=========================================="
echo "Server Setup Complete!"
echo "=========================================="
echo ""
echo "IMPORTANT: Change MySQL root password!"
echo "Current temporary password: ChangeThisRootPassword123!"
echo ""
echo "To change it, run:"
echo "sudo mysql"
echo "ALTER USER 'root'@'localhost' IDENTIFIED BY 'YOUR_NEW_STRONG_PASSWORD';"
echo ""
echo "Next steps:"
echo "1. Deploy your application to /var/www/jusmoto"
echo "2. Configure database"
echo "3. Set up Nginx configuration"
echo "4. Configure your .env file"
echo ""
echo "=========================================="
