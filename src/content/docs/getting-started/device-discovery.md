---
title: Device Discovery
description: How GivLocal finds your GivEnergy devices on the network.
---

GivLocal scans your local network for GivEnergy hardware automatically when you open the Devices screen.

## How discovery works

The app probes common Modbus TCP ports across your subnet and identifies GivEnergy devices by their responses. Discovered devices are shown with their product type, serial number, firmware version, and IP address.

## Favourites

Swipe right on a device to mark it as a favourite. Favourited devices are pinned to the top of the list and connect automatically when the app opens.

## Multiple devices

If you have a Gateway with multiple batteries or inverters attached, they all appear as separate entries. You can switch between them using the tabs at the top of the Dashboard screen.

## Removing a device

Swipe left on a device and tap **Delete** to remove it from the list.

## Troubleshooting

If a device isn't found automatically:

- Check it's powered on and connected to the network
- Try connecting manually using its IP address (see [Connecting to Your System](/getting-started/connecting/))
- Check that Modbus TCP is enabled on the device
