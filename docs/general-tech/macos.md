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

## Mounting SSH file systems

- [macFUSE](https://osxfuse.github.io/)


# Articles I found

- [jdckl.dev - distrohopping to an m2](https://jdckl.dev/blog/distrohopping-to-an-m2)

