---
title: Device Discovery
description: How INVLocal finds your GivEnergy devices on the network.
---

INVLocal scans your local network for GivEnergy hardware automatically when you open the Devices screen. If your device list is empty on first launch, the scan starts automatically.

## What the scanner finds

| Device type | Port |
|-------------|------|
| GivEnergy Hybrid and AC-coupled inverters | 8899 |
| GivEnergy EV Charger (Modbus) | 502 |
| GivEnergy EV Charger (OCPP via Home Assistant) | 8123 |

## Automatic scan

Tap the scan icon in the top right of the discovery screen. INVLocal scans every address on your current subnet (e.g. `192.168.1.1–254`) for GivEnergy devices. A progress bar shows how far through the scan you are.

On a typical home network the scan completes in under a minute. When your inverter is found it appears in the list immediately - you don't need to wait for the scan to finish before connecting.

## Scanning a different subnet

If your inverter is on a different subnet to your phone (common with mesh systems or VLANs), tap **Scan Different Subnet** in the scan options menu and enter the first three octets of the target range - for example, `192.168.100`. The app will then scan `.1` through `.254` on that range.

## Manual entry

If you already know your inverter's IP address, tap **Manual Connection**, enter the IP or hostname, and tap **Connect**. This is also the method to use when connecting over Tailscale or port forwarding, where scanning isn't available.

## Managing your device list

Each entry shows the product name, IP address, firmware version, serial number, and when the device was last seen.

- **Rename** - long-press a device and tap **Edit** to give it a custom name or update its IP. You can also set a remote address here (e.g. `myinverter.example.com:18899`) for port forwarding setups
- **Favourite** - long-press and choose **Set as Favourite**, or swipe right. The starred device connects automatically on launch. Requires **INVLocal Pro**
- **Delete** - swipe left and tap **Delete**, or use the long-press menu

## Connection errors

If a connection fails, INVLocal shows a brief explanation:

| Message | Likely cause |
|---------|-------------|
| Device rejected the connection | Inverter is offline or temporarily busy |
| Device did not respond in time | Phone and inverter may be on different networks; also occurs briefly after a router restart |
| Could not reach the device | No network route between your phone and the inverter |
| Device responded but isn't a GivEnergy inverter | Something else on your network answered on port 8899 |

Tap **Retry** to attempt the connection again, or **Devices** (top right of the dashboard) to return to the device list.

## Troubleshooting

If a device isn't found automatically:

- Check it's powered on and connected to the network
- Make sure your phone and inverter are on the same network segment
- Try **Scan Different Subnet** if you have a mesh or VLAN setup
- Try **Manual Connection** using the inverter's IP address
