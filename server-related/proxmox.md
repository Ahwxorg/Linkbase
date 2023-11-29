---
outline: deep
---

# Proxmox

## Changing the static IP

```sh
vim /etc/network/interfaces
```

```sh
vim /etc/hosts
```

## Helper scripts for lazy people

Helper scripts can be found [here](https://tteck.github.io/Proxmox/).

Post install script:

```sh
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/post-pve-install.sh)"
```
