---
outline: deep
---

# TrueNAS Scale

I've been using TrueNAS Scale in a VM for quite a while now. It's a solid system with very few bugs, features a nice "just-works" web GUI and has amazing ZFS support. It also allows you to run applications using Kubernetes, those are also managed with a nice GUI and you don't have to do complicated stuff.

## Backups from Time Machine (macOS)

As I use a [Mac](/general-tech/macos), I can best use Time Machine.

This does not work out-of-the-box on TrueNAS (at least not on my machine/VM), we need to tweak a few settings.

### Make a new user

`Credentials -> Local Users -> Add`

Leave everything at the default and put in a username and password.

Each Mac should have their own local user.

### Create a parent dataset

`Datasets -> Add`

Just enter a name like TimeMachine, leave everything at default settings. Make sure `Share Type` is set to `Generic`.

### Create another dataset for the Mac (need one dataset per Mac)

`Datasets -> The dataset you just made -> Add`

Enter a name like Pawou-TimeMachine (Pawou is the name of my Macbook, it's the Japanese original for the Pokémon Seel...) and set `Share Type` to `SMB`.

### Create the SMB share

`Shares -> Add`

Path should be whatever you made the path of the child dataset, e.g. `/mnt/mirror/TimeMachine/Pawou-TimeMachine`, for dataset `Pawou-TimeMachine` inside `TimeMachine` on pool `mirror`. YMMV.

Select `No presets` at the dropdown for `Purpose`. Inside `Advanced options`, enable `Time Machine`, also enable `Use Apple-style Character Encoding`. You also need to make sure `ACL` is turned on.

### Connect the share to the Mac

Open Finder, hit Cmd + K and enter your SMB server, e.g. `smb://pawou@truenas.local` for user `Pawou`. Enter credentials when asked, then go into `System Settings -> General -> Time Machine`, click the plus (+) sign, select the disk and enter your preferences.
