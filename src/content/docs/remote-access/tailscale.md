---
title: Tailscale
description: Using Tailscale for secure remote access to your GivEnergy system.
---

import { Steps } from '@astrojs/starlight/components';

[Tailscale](https://tailscale.com) creates an encrypted mesh VPN between your devices. Once set up, your phone can reach your inverter as if it were on your home network, from anywhere.

## Setup

<Steps>

1. **Create a free Tailscale account** at [tailscale.com](https://tailscale.com).

2. **Install Tailscale on a device at home** that stays on 24/7 — a Raspberry Pi, NAS, Home Assistant instance, or any always-on computer works well. This device needs to be on the same network as your inverter.

3. **Enable subnet routing** on that device so it advertises your home subnet (e.g. `192.168.1.0/24`) to your Tailscale network. See the [Tailscale subnet routing guide](https://tailscale.com/kb/1019/subnets).

4. **Install Tailscale on your phone** and sign in to the same account.

5. **Open GivLocal** and connect to your inverter using its local IP address. When you're away from home, Tailscale routes the traffic through the subnet router at home.

</Steps>

## Tips

- The free Tailscale plan supports up to 3 users and 100 devices — more than enough for personal use.
- You can also install Tailscale directly on a device running GivTCP or Home Assistant and use that as the exit node.
