---
outline: deep
---

# Cool MacOS stuff

## Package managers

- [brew.sh](https://brew.sh)
- [MacPorts](https://macports.org/) (also allows usage of some X11 programs and Linux exclusives such as dmenu.)

## TouchID as sudo password:

```sh
doas nvim /etc/pam.d/sudo
```
And now add as the first non-comment line:

`auth sufficient pam_tid.so`

## Remapping keys (Karabiner)

I use Karabiner to do some key remapping such as:

* fn -> control & control -> fn
* option (alt) -> command (meta) & command (meta) -> option (alt)
* control + h, j, k, l -> arrow- left, down, up, right

I do this since I don't like the key layout on MacBooks by default. Karabiner allows me to remap keys on the MacBook's keyboard but not on my mechanical board. I love this since my mechanical board has the correct layout by default.

## Keyboard shortcuts (skhd)

[skhd](https://github.com/koekeishiya/skhd) is a simple hotkey daemon; a tool that allows you to map key combinations to shell commands.

## Window management (Yabai)

[Yabai](https://github.com/koekeishiya/yabai) is an amazing window management tool. Yabai is basically a tiling window manager, and although it has some delays etc, it works without any issues. It's made by the same person that made [skhd](#skhd), and thus it works pretty good together with skhd.

## Bar-like (Sketchybar)

I use Sketchybar to display workspaces, volume, battery, GitHub notifications, WiFi network and IP address, updates, date and time.

Sketchybar has a very nice intergration with [skhd](#skhd) and [yabai](#yabai).

## Mounting other file systems than default MacOS ones

- [macFUSE](https://osxfuse.github.io/)


## Some commands:

Improve key repeat:

```sh
defaults write NSGlobalDomain KeyRepeat -int 1
defaults write NSGlobalDomain InitialKeyRepeat -int 14
```


# Articles I found

- [jdckl.dev - distrohopping to an m2](https://jdckl.dev/blog/distrohopping-to-an-m2)
- [Christian Bargmann - So you want i3wm on MacOS?](https://cbrgm.net/post/2021-05-5-setup-macos/)

# Awesome-productivity-likes

I use a MacBook Pro 14" with the following specs (displayed in the terminal using [neofetch](https://github.com/dylanaraps/neofetch))

```sh
                    'c.          ahwx@Pawou.redacted.internal.domain
                 ,xNMM.          ---------------------------
               .OMMMMo           OS: macOS 13.5.2 22G91 arm64
               OMMM0,            Host: Mac14,9
     .;loddo:' loolloddol;.      Kernel: 22.6.0
   cKMMMMMMMMMMNWMMMMMMMMMM0:    Uptime: 17 days, 19 hours, 55 mins
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.    Packages: 320 (port), 312 (brew)
 XMMMMMMMMMMMMMMMMMMMMMMMX.      Shell: fish 3.6.1
;MMMMMMMMMMMMMMMMMMMMMMMM:       Resolution: 3440x1440, 1920x1080
:MMMMMMMMMMMMMMMMMMMMMMMM:       DE: Aqua
.MMMMMMMMMMMMMMMMMMMMMMMMX.      WM: yabai
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.    Terminal: tmux
 .XMMMMMMMMMMMMMMMMMMMMMMMMMMk   CPU: Apple M2 Pro
  .XMMMMMMMMMMMMMMMMMMMMMMMMK.   GPU: Apple M2 Pro
    kMMMMMMMMMMMMMMMMMMMMMMd     Memory: 2757MiB / 16384MiB
     ;KMMMMMMMWXXWMMMMMMMk.
       .cooc,.    .,coo:.
```

I usually have it docked to my 34" 3440x1440 ultrawide monitor with built in USB hub (4x type-A 3.0_, which has a 1TB HDD for backups, my keyboard and a USB cable to another (my monitor stand's built in) USB hub (also 4x 3.0 type-A). This hub has a temperature/humidity sensor for my room built with an Arduino, my mouse USB dongle and my microphone USB-C cable. The laptop also has a HDMI 2.1 port which I use for a 24" Fujitsu 1920x1080 monitor. Here is a diagram:

Laptop USB-C port
  * Philips monitor hub/audio/video/power
    * Keyboard: Varmilo VA87M Retro Keys
    * Keyboard: Keychron K3 (BT/cable)
    * Harddrive: 1TB Apple-branded HGST HDD
    * USB Hub in monitor stand: ARCTIC Z3 Pro
      * Mouse dongel: Logitech G Pro X Superlight
      * Arduino Uno with LCD as temp/hum sensor and display (throws the data back in JSON over serial for Home Assistant in the future)
      * Microphone: Blue Microphones Yeti with a USB-C -> mini-USB
Laptop HDMI port
  * 24" Fujitsu 1920x1080 normalwide monitor

The laptop is barely recognisable as a MacBook, as I replaced the MacOS status bar with [SketchyBar](https://github.com/FelixKratz/SketchyBar), replaced the default window manager with [yabai](https://github.com/koekeishiya/yabai) and added trust keyboard shortcuts with [skhd](https://github.com/koekeishiya/skhd).
