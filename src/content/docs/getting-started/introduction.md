---
title: Introduction
description: What GivLocal is and how it works.
---

GivLocal is a mobile app for iOS and Android that lets you monitor and control your GivEnergy solar and battery system **directly over your home network**, without any cloud service or internet connection.

Right off the bat I'm going to be clear, the app is free to download and runs in read only mode by default. This is intended for people who simply want to check in on their system but not necessarily control it and also as a test for people who want control to check if it works with their setup.

If you want to control your equipment then there is a small upgrade fee, currently £4.99 or equivalent in local currency. This unlocks everything apart from the Commissioning section which is reserved for installers and carries a much higher upgrade cost to match its commercial value and also to put off casual buyers.

For more details, refer to the [Pro & Installer](/pro/) section. A copy of the [End User Licence Agreement](/eula/) is also available for review.

## How it works

GivLocal communicates directly with your GivEnergy hardware over your home network. GivEnergy devices expose a Modbus-based interface on port 8899 (inverters and gateways) or port 502 (EV Charger), which GivLocal uses to read live data and write settings. Your phone talks directly to the hardware over Wi-Fi - no intermediary, no cloud.

## What you can do

- View live power flow between solar, battery, home, and grid
- Check today's energy statistics (solar generation, consumption, import, export)
- Monitor battery state of charge, capacity, and charge/discharge rate
- Set charge and discharge schedules with target SOC levels
- Adjust inverter settings including power limits and battery reserve
- Discover all compatible devices on your network automatically
- Open the built-in User Manual from Settings → User Manual for step-by-step help

## What you don't need

- A GivEnergy account
- An internet connection (once set up)
- Any subscription or ongoing cost

## Next steps

Follow the [Installation guide](/getting-started/installation/) to download the app, then [connect to your system](/getting-started/connecting/).
