#!/bin/bash
echo "Deploying website to VPS..."

# Create web directory if it doesn't exist
sudo mkdir -p /var/www/html

# Copy files
sudo cp index.html /var/www/html/
sudo cp style.css /var/www/html/
sudo cp script.js /var/www/html/

# Set proper permissions
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

echo "Deployment complete!"
echo "Visit: http://$(curl -s ifconfig.me)"
