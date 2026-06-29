---
title: Battery Management
description: Monitoring and controlling your battery.
---

import { Aside } from '@astrojs/starlight/components';

GivLocal gives you direct control over your battery's charge and discharge behaviour.

## Quick actions

From the Dashboard, three buttons let you override the current mode immediately:

- **Charge Now** — charges the battery as fast as possible (up to the configured charge power limit)
- **Discharge Now** — discharges the battery to home (up to the configured discharge power limit)
- **Pause** — holds the battery at its current state of charge

<Aside type="caution">
  Quick actions override active schedules until the next scheduled event or until you cancel them manually.
</Aside>

## Battery card

The battery card on the Dashboard shows:

- Current state of charge (%)
- Active mode (Charging, Discharging, Idle, Paused)
- Current power in kW
- Estimated time to full or empty
- Total and usable capacity in kWh

## Battery reserve

The battery reserve sets the minimum SOC the inverter will discharge to. Configure it in **Inverter → Battery Control**. This prevents the battery from being completely drained by discharge schedules or quick actions.

## Eco Mode

When Eco Mode is enabled, the inverter automatically manages charging and discharging based on your tariff and usage patterns. Configure it in **Inverter → Battery Control**.
