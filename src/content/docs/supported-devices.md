---
title: Supported Devices
description: GivEnergy hardware compatible with GivLocal.
---

GivLocal supports a wide range of GivEnergy hardware, discovered automatically over your local network via Modbus TCP.

## Supported hardware

| Device | Notes |
|--------|-------|
| **Gateway** | Manages multiple batteries from a single connection point |
| **All In One (AIO)** | Full support — per-unit stats, battery cell detail, charge & discharge history |
| **Hybrid Inverter GEN1 & GEN2** | Full schedule and settings access |
| **Hybrid Inverter GEN3** | Full schedule and settings access |
| **HV Battery** | High-voltage systems with SOC monitoring, cell detail, and charge/discharge control |
| **AC-Coupled Inverter** | Full support alongside existing solar setups |
| **EMS** | Energy Management System devices with whole-home energy monitoring |
| **EV Charger** | Modbus TCP for direct local control, or OCPP via Home Assistant or a local OCPP server |

## Not sure what you have?

Open GivLocal, tap **Devices**, and let the app discover your hardware automatically. It identifies device types from their Modbus responses.

## Something missing?

If you have GivEnergy hardware that isn't working with GivLocal, please [open an issue on GitHub](https://github.com/Thomserve/GivLocalApp/issues) or email [support@givlocal.app](mailto:support@givlocal.app).
