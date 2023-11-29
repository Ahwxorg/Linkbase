---
outline: deep
---

# Networking

Learning networking here.

## Layers

Layer 1 = Media = bits as the actaul waves & signals
Layer 2 = MAC = frame goes from MAC address A to MAC B
Layer 3 = IP = packet goes from IP address A to IP B
Layer 4 = TCP/UDP & TLS = End to end connections (Segments)
Layer 5 = Session (no more package or segment from now its data)
Layer 6 = Oresentation = HTML, JPEG etc
Layer 7 = Application = DNS, EMAIL, P2P etc

### Layer 1

The actual wavelenghts on the cable. You usually never talk about this layer.

### Layer 2

Often seen in unmanaged and cheaper managed switches.

Layer 2 is a frame being sent from a sending MAC address and received by a receiving MAC address. This way the switches know where to route the information, see ![image that shows the building blocks of mac addresses](/general-tech/networking/mac-addresses.png).

Unmanaged switches work by a few things, first; the preamble. The preamble is a series of 00's to tell that this is a new frame. After the preamble comes the destination. This means the switch can send it right away if it knows the destination. If it does not, it will then check the port and save the source address to the port. But since computers constantly broadcast to the network (traffic to a [broadcast address](https://en.wikipedia.org/wiki/Broadcast_address)), it will learn this pretty quickly.

### Layer 3

![graphic for showing layer 2 packets vs layer 3 packets](/general-tech/networking/layer2-vs-layer3.png)

Layer 3 has similarities with layer 2. The design is similar for instance; layer 3 contains the destination first, and then the source. This time, however, it's not a MAC, but an IP.

TTL stands for time to live, it basically means how many hops you can have at most. You can view your hops to `ahwx.org` for example by running `traceroute ahwx.org`. That'll show all the intermediate connection points that the packet goes through. This means that if a package has a TTL of 0, the first layer 3 device (probably router) will send a new message back saying it can't deliver to that destination because the maximum amount of hops is reached. The failed message is ICMP and the sended message is UDP. Now your computer knows the first hop/layer 3 device, then once traceroute recieves that, it sends a packet with a TTL of 1 and it will get the second layer 3 device and then a TTL of 2 and get the third, and that goes on untill the destination IP matches IP reached.

These layer 3 packets contain a segment (layer 4) + layer 5, 6 and 7. You don't really talk about the layers above 3, mainly because that's all a kind of application layer I think?


PS: I am by no means an expert, but someone helped me and I think I figured it out. These are my personal notes.
