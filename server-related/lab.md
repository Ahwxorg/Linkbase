---
outline: deep
---

# My homelab

My current homelab consists of 3 Proxmox servers, one NixOS server and a few networking applicances.

## Hypervisors (brains of the lab)

### Software

All of the hypervisors run on Proxmox and most VMs run on Debian 12.

### Hardware

My main servers are 2 HPE ProLiant DL380p G8's. One runs 2 Intel Xeon E5-2630L v2's, the other runs 2 Intel Xeon E5-2650's. Both have 128GB of DDR3 ECC Registered RAM, one has 2*146GB 15K RPM enterprise SAS drives in RAID1 and the other one has 3*1TB in RAID5.

I also have another test-machine. It's a Dell PowerEdge R220, and has a single Intel Xeon E3-1230L v3 and 16GB of RAM. It has two old HDDs that are 300GB and 250GB in RAID1. Not ideal but better than a single drive.

## The NAS (the bulk-storage, backups, etc)

### Software

My NAS runs NixOS, mainly because I dislike storage-based OS's like TrueNAS/Openmediavault/Unraid. I personally like doing it "the hard way", and using something like NixOS looked cool when trying it.

### Hardware

It runs on an Intel Xeon E5-2650 v4, 128GB of ECC Registered DDR4 RAM, 512GB SATA SSD (boot), 2*2TB (backup) in RAID1, 2*16TB (storage) in RAID1 and another 256GB NVMe cache.
