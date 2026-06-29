---
title: Schedules
description: Setting up charge and discharge time slots.
---

import { Aside } from '@astrojs/starlight/components';

The Schedules screen lets you configure time windows for automatic charging and discharging.

## Charge slots

Each charge slot defines a time window during which the battery will charge, and an optional target SOC level to charge to.

- Up to **10 charge slots** per device
- Each slot has a start time, end time, and target SOC (%)
- The schedule must be **enabled** using the toggle at the top of the screen for slots to run

**Example use case:** charge from grid during cheap overnight tariff hours (e.g. Octopus Go, Agile off-peak).

## Discharge slots

Each discharge slot defines a time window during which the battery will discharge to the home (and optionally to the grid), with a lower SOC cutoff to prevent over-discharge.

- Up to **10 discharge slots** per device
- Each slot has a start time, end time, and lower SOC cutoff (%)
- The discharge schedule must also be **enabled** to run

**Example use case:** discharge during peak tariff hours to reduce import costs.

## Managing slots

- Tap **+ Add slot** to create a new slot
- Tap the **›** arrow on a slot to edit it
- Swipe left or tap the 🗑 icon to delete a slot

<Aside type="tip">
  Slots are written directly to the inverter over Modbus TCP. Changes take effect immediately without needing to restart anything.
</Aside>
