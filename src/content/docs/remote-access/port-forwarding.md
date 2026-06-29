---
title: Port Forwarding
description: Using port forwarding for remote access to your GivEnergy system.
---

import { Aside } from '@astrojs/starlight/components';

<Aside type="caution">
  Exposing Modbus TCP directly to the internet is a security risk. Only do this if you understand the implications and have appropriate firewall rules in place. Tailscale is recommended instead.
</Aside>

Port forwarding lets you reach your inverter's Modbus TCP port (default: **502**) from outside your home network by mapping an external port on your router to the inverter's internal IP.

## Setup

1. Assign your inverter a static IP or DHCP reservation in your router
2. In your router's port forwarding settings, forward an external port (e.g. `5020`) to your inverter's internal IP on port `502`
3. Find your home's external IP address (or use a dynamic DNS service)
4. In GivLocal, use the **Manual Connection** option and enter `<your-external-ip>:<forwarded-port>`

## Security considerations

- Modbus TCP has no built-in authentication
- Restrict access using your router's firewall to only allow connections from known IP addresses
- Consider using a VPN (such as Tailscale) instead
