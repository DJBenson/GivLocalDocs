---
title: Connecting to Your System
description: How to connect GivLocal to your GivEnergy inverter or gateway.
---

import { Aside } from '@astrojs/starlight/components';

GivLocal connects to your GivEnergy hardware over your home network using Modbus TCP.

## Before you start

Make sure:

- Your phone is connected to the same Wi-Fi network as your GivEnergy inverter or gateway
- Modbus TCP is enabled on your device (it is on by default for most GivEnergy hardware)

<Aside type="tip">
  If you have a Gateway, connect to the Gateway rather than individual inverters — it provides a unified view of your whole system.
</Aside>

## Automatic discovery

Open GivLocal and tap **Devices**. The app will scan your local network and automatically find any compatible GivEnergy devices. Tap a device to connect to it.

See [Device Discovery](/getting-started/device-discovery/) for more detail.

## Manual connection

If automatic discovery doesn't find your device, you can enter its IP address manually:

1. Find your inverter or gateway's IP address from your router's DHCP client list
2. Open GivLocal and tap **Devices**
3. Scroll to **Manual Connection**, enter the IP address, and tap **Connect**

<Aside type="tip">
  Assign a static IP (or DHCP reservation) to your inverter in your router settings so the address doesn't change.
</Aside>
