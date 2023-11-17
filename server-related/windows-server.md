---
outline: deep
---

# Windows Server (2019)

Windows server really sucks, but if you need it for some reason, here are my notes.

## Base install

Important information related to the base install.

### Enable WiFi

WiFi is something you'd rather not use for a server, as it can be very instable. If you need it though, the following command can help:

```powershell
Get-WindowsFeature *Wireless*
Install-WindowsFeature -Name Wireless-Networking
```

## Hyper-V

When managing VMs in a Windows Server environment, you will probably use Hyper-V.

### Weird annoyances with Hyper-V

* Hyper-V maximizes the RAM you can give a VM at 12288 GB.
* Hyper-V maximizes the VHD space you can give a VM at 64TB.
* For some reason, booting from .img files (such as from OPNsense) is not possible.
* You **cannot** mount external devices to a VM, except for external drives by a really dumb way.
* You **cannot** do PCI/USB passthrough.
