---
title: Live Power Flow
description: The animated real-time power flow dashboard.
---

The Dashboard shows an animated diagram of how power is moving through your system right now, updated every few seconds.

## What's shown

| Node | Description |
|------|-------------|
| ☀️ Solar | Current solar generation in W or kW |
| 🔋 Battery | State of charge (%) and charge/discharge rate |
| 🏠 Home | Current home consumption |
| ⚡ Grid | Import (red) or export (green) |
| 🚗 EV Charger | Charge rate if an EV charger is connected |

Animated dots on the lines show the direction and relative speed of power flow.

## Quick actions

Below the power flow diagram, three buttons let you immediately:

- **Charge Now** — force the battery to charge from grid or solar
- **Discharge Now** — force the battery to discharge to home
- **Pause** — stop charging and discharging

These override any active schedule until cancelled or the next scheduled event.

## Multiple devices

If you have more than one device (e.g. a Gateway with multiple All-In-One units), use the tabs at the top of the screen to switch between them. The power flow updates to reflect the selected device.
