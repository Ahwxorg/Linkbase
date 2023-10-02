---
outline: deep
---

# Simple hosting init guide

> A simple rough guide with some snippets for people that want to get into hosting and have some experience. Not extremely beginner/noob friendly.

## Ingredients

* Get a server, a homelab works (must have an external IPv4 or a VPS to tunnel to, see [tunnels](/server-related/tunnels)) or something from a [VPS provider](/server-related/vps)
* Get a domain, DuckDNS works if you need something free
* Some terminal skills

## Getting started, adding the domain to the server IPv4.

Make sure to add the IPv4 of the public server to your DNS as an A record; simple screenshot below. (This image is taken from landchad.net, a site by Luke Smith which is a simple hosting guide.)

![https://landchad.net/pix/dns-ipv6-done.png](https://landchad.net/pix/dns-ipv6-done.png)

## Installing and configuring a webserver

```sh
apt update
apt upgrade
apt install nginx nginx-common
```

### Editting the configuration

```sh
$EDITOR /etc/nginx/sites-available/somesite
```

Example block for HTML/a static site:

```ini
server {
        listen 80 ; # Server on IPv4
        listen [::]:80 ; # Also serve on IPv6
        server_name example.me ; # Set a server name, domain (must be pointed to your server!)
        root /var/www/html/example-site ; # Webserver root directory
        index index.html; # Which files to serve when hitting / or dir/
        location / { 
                try_files $uri $uri/ =404 ; # Grab HTML, if it's not there, return 404
        }
}
```

Example block for PHP:

```ini
server {
        listen 80; # Server on IPv4
        listen [::]:80 ; # Also serve on IPv6
        server_name _; # Server on any server name/domain.

        root /var/www/html/example-site; # Webserver root directory
        index index.html index.php; # Which files to serve when hitting / or dir/

        location ~ \.php$ { # When a PHP file gets requested, request PHP to serve it
               include snippets/fastcgi-php.conf;
               fastcgi_pass unix:/run/php/php-fpm.sock;
        }
        location / { # When a file that should end with .php gets requested as file instead of file.php, return the file.php page
          try_files $uri $uri/ @extensionless-php;
        }

        location @extensionless-php { # When a file that should end with .php gets requested as file instead of file.php, return the file.php page
          rewrite ^(.*)$ $1.php last;
        }
}
```

### Make the HTML which NGINX will grab

Of course, you need to have either HTML or PHP at the directory you specify as the root; for example:

```sh
mkdir -p /var/www/html/example-site
cat <<EOF >> /var/www/html/example-site/index.html
<p>Your example text</p>
EOF
```

### Enable the NGINX server

```sh
ln -s /etc/nginx/sites-available/mywebsite /etc/nginx/sites-enabled
systemctl reload nginx
```

### Firewall

> Some VPS providers have a firewall preinstalled. Some others have it in the interface, you should check if it does not work after enabling the NGINX server.

```sh
ufw allow 80
ufw allow 443
```

To be continued!
