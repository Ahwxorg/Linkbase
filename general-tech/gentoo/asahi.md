---
outline: deep
---

# Gentoo on my M2 Pro MacBook using Asahi Linux

> Important note: I *will* miss things in this "guide". Do not take this as a guide, please consult help if you have issue. This is more of a personal logbook.

After installing Gentoo Linux onto my MacBook Pro (14" M2 Pro, 2023) using the [Asahi](https://asahilinux.org) project, I wanted to install Hyprland, since:

- Wayland actually works a lot nicer on those systems
- Trackpad support is a little better on Wayland
- Automatically extending the display when plugging in a HDMI cable is a gamechanger. The way this worked on macOS was sub-par.
- Animations go brr

## What did I need to do to get stuff working?

I followed the wiki, untill I had to manually start doing things "the Gentoo way".

### Kernel and GPU stuff

One of the Asahi-devs gave me a kernel .config file, which I customised and built. I also had to build an initramfs, commands to do all of those are down below:

You want to make sure to have installed `rust` and `bindgen`:

```sh
su root
emerge -avq rust bindgen kmod
cd /usr/src/linux-6.6.0_p12-asahi # YMWV
make -s rustavailable # Rust must be available
```
Then go ahead and `emerge mesa::asahi`.

```sh
emerge -avq mesa::asahi
```

After doing these, go into `make menuconfig` and exit, then go into `make menuconfig` again. Set:

```txt
CONFIG_DRM_ASAHI=m
CONFIG_DRM_APPLE=y
```

Now we can build the kernel/


```sh
su root
mount /dev/nvme0n1p4 /boot # Change device, YMMV
cd /usr/src/linux-6.6.0_p12-asahi # Change dir, YMWV
env-update && source /etc/profile # Important if you miss certain modules, I have this set inside root's bashrc
make -j10 # Use your CPU core count here, for me that's 10
make install -j10 # Same as previous command
make modules_install -j10 # Same as previous command
dracut --kver $(make -s kernelrelease) --force --zstd
grub-mkconfig -o /boot/grub/grub.cfg
update-m1n1 # Very important to do after every update of m1n1 or kernel update!
```

## Speakers

```sh
emerge -av media-libs/asahi-audio # The dependencies will list Pipewire with the correct USE-flags
rc-update add speakersafetyd default
usermod -aG pipewire liv # Replace `liv` with your username
```

> You should add `gentoo-pipewire-launcher` to your autostart.

### Support for DRM content like Spotify

```sh
emerge widevine-installer::asahi
widevine-installer
```

## Other tools you might want to use

> Part of these needs GURU, to enable it:

```sh
emerge app-eselect/eselect-repository
doas eselect repository enable guru
emerge --sync guru
```

> USE-flags are listed inside dotfiles GitHub repository.

```sh
emerge -avq media-sound/playerctl app-misc/brightnessctl gui-apps/swaybg gui-apps/swaylock gui-apps/tofi media-gfx/imv gui-apps/wl-clipboard gui-apps/grim gui-apps/slurp media-sound/pavucontrol gui-apps/waybar sys-apps/ripgrep
```

### Building `element-desktop`

Since you also need sqlcipher, we'll install that first.

#### Building sqlcipher (dependency)

```sh
git clone https://github.com/sqlcipher/sqlcipher ~/.local/src/sqlcipher
cd ~/.local/src/sqlcipher
./configure --enable-tempstore=yes CFLAGS="-DSQLITE_HAS_CODEC" LDFLAGS="-lcrypto"
make -j10
doas make install -j10
```

#### Building Element itself

> This *should* work, however the `.AppImage` did not work for me personally. The `dist/linux-arm64-unpacked` folder had a binairy that worked, however.

```sh
git clone https://github.com/element-hq/element-desktop ~/.local/src/element-desktop
cd ~/.local/src/element-desktop
yarn install
yarn run fetch --noverify --cfgdir element.io/release
yarn add matrix-seshat
yarn add electron-build-env
yarn run build:native # Needed for encrypted room searching
nvim package.json # Eliminate all targets under build.linux.target and add "AppImage"
yarn run build
```

## Resources

* [Are we Wayland yet?](https://arewewaylandyet.com/) website that shows the current state of Wayland.
