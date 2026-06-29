---
title: Inverter Settings
description: Advanced inverter configuration and diagnostics.
---

import { Aside } from '@astrojs/starlight/components';

The Inverter screen provides access to advanced settings, live diagnostics, and battery control options.

## Overview

The Overview section shows key device information:

- Product type and serial number
- Firmware version
- Current status (On Grid, Off Grid, etc.)
- Last updated timestamp

## Battery Control

Configure how the battery behaves:

| Setting | Description |
|---------|-------------|
| Eco Mode | Automatic charge/discharge management |
| Pause Start / End | Time window during which the battery is held |
| Pause Mode | Whether to pause charging, discharging, or both |
| Battery Reserve | Minimum SOC the inverter will discharge to |

## Power Limits

Adjust the active power output and battery charge/discharge rates:

| Setting | Description |
|---------|-------------|
| Active Power Rate | Overall inverter output limit (%) |
| Charge Power Limit | Maximum battery charge rate (kW) |
| Discharge Power Limit | Maximum battery discharge rate (kW) |

## Write Log

The Write Log records all commands sent to the inverter from GivLocal, including the register address, value written, and timestamp. Useful for verifying that changes took effect.

## Live Telemetry

Shows raw register values from the inverter in real time. Useful for diagnostics and for understanding what the inverter is currently reporting.

## Installer Mode

<Aside type="caution">
  Installer Mode provides access to commissioning and service settings intended for qualified installers. Incorrect changes can affect system operation.
</Aside>

A dedicated installer section is accessible separately from everyday user controls.
