---
outline: deep
---

# Tunnels

I use some sort of tunneling to _put my internal services out there_. Here are some ideas on tunnels and/or things that might achieve the same thing.

## Ingredients:

- Any VPS or server which has portforwarding options for the ports you will need.
- Some service on another server that you will proxy to.
- Some technical knowledge.
- [NGINX](https://nginx.org) on the vps.

## Route 1: Wireguard

I would just [set up a Wireguard server](https://github.com/Nyr/wireguard-install), setup a NGINX webserver on the public server/VPS and proxy the requests through that NGINX server.

## Route 2: NGINX

> Here we are using NGINX's streams block to forward connections from a VPS to your homelab/server and thus hiding your IP address.

### Installing NGINX

```sh
su -
apt update && apt -y upgrade
apt -y install nginx nginx-common libnginx-mod-stream # latter one should not be needed but I install it anyways
```


### Configuring NGINX

```sh
cd /etc/nginx && mkdir rproxy && cd rproxy && mkdir stream stream/available stream/enabled
nvim stream/available/ssh.conf
```

Add the following content (example):

```sh
upstream ssh {
  server home-server-ip:22;
}

server {
  listen 22;
  proxy_pass ssh;
}
```

#### nginx.conf
```sh
cd /etc/nginx && nvim nginx.conf
```
Now change the following content:

```sh
  include /etc/nginx/conf.d/*.conf;
  # include /etc/nginx/sites-enabled/*;
  include /etc/nginx/rproxy/http/enabled/*.conf;
}

stream {
  include /etc/nginx/rproxy/streams/enabled/*.conf;
}
```

#### So now, the Virtual Host section should look like this
```sh
# Virtual Host Configs
  include /etc/nginx/conf.d/*.conf;
  # include /etc/nginx/sites-enabled/*;
  # include /etc/nginx/rproxy/http/enabled/*.conf; # Example this if you haev http rproxies.
}

stream {
  include /etc/nginx/rproxy/streams/enabled/*.conf;
}
```

#### Activating our configurations

```sh
ln -s /etc/nginx/rproxy/http/available/*.conf /etc/nginx/rproxy/http/enabled
ln -s /etc/nginx/rproxy/stream/available/*.conf /etc/nginx/rproxy/stream/enabled
```

Let's test if everything is correct:

```
nginx -t
```

### Restart NGINX

```sh
systemctl restart nginx
```

### And you're done!
