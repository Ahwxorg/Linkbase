---
outline: deep
---

# Helpful links
https://kennydodrill.com/blog/stable-void-linux-setup-guide/#installation-notes
https://gist.github.com/bastomiadi/abf27618341fc561735adfb17e586916
https://github.com/siduck/dotfiles
https://docs.voidlinux.org/config/graphical-session/xorg.html

# Setting up networking

run `dhcpcd` first (doesnt work if you run wpa_supplicant first), then run `wpa_passphrase 'SSID' 'passwd' >> /etc/wpa_supplicant/wpa_supplicant-wlp2s0.conf`, then run `wpa_supplicant`

# Updating the system and adding nonfree repositories

```sh
xbps-install -Su
xbps-install void-repo-nonfree void-repo-multilib void-repo-multilib-nonfree
```

> If those commands return something along the lines of "Operation not permitted.", run `SSL_NO_VERIFY_PEER=true xbps-install -Su`. This will remove the SSL verification, which is an issue on older installation media.

# Add a user account

```sh
useradd -m -G wheel,plugdev,video,audio,usbmon ahwx
passwd ahwx
```

Check the Void documentation for sudo permissions and about adding to other groups if needed

# Installing needed packages

```sh
xbps-install opendoas neovim zsh curl wget git gnupg lf dbus xdg-user-dirs xdg-utils xdg-desktop-portal-wlr dbus psutils htop
ln -s /etc/sv/dbus /var/service/dbus 
```

# Installing video drivers (please refer to the handbook for this as my info might be outdated)

For AMD/ATI cards:

```sh
xpbs-install mesa-vaapi mesa-vdpau mesa-dri vulkan-loader xf86-video-amdgpu xf86-video-ati # choose if you need ati or amdgpu here!
```

For Intel cards:

```sh
xbps-install linux-firmware-intel mesa-dri vulkan-loader mesa-vulkan-intel libva-intel-driver # use libva-intel-driver up to coffee lake, else use intel-media-driver (from broadwell)
```

For NVIDIA cards:

```sh
xbps-install xf86-video-nouveau mesa-dri mesa-dri-32bit # last package is glibc only
```

# Installing window manager etc (user environment basically)

```sh
xbps-install polybar i3 sxhkd xorg-minimal picom feh firefox kitty 
```

# Cloning dotfiles

```sh
git clone https://github.com/ahwxorg/dotfiles
cd dotfiles
mv * ~
mv .* ~
```
