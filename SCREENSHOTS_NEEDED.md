# Screenshots Needed

## Features

### Battery Cell Details (`features/battery-cell-details`)
- [x] Battery cell detail sheet — LV battery (per-cell voltages + temperatures)
- [ ] Battery cell detail sheet — HV battery (BMU/BCU pack view); no HV battery hardware was available to capture this

### Fault Log (`features/fault-log`)
- [ ] Fault Log screen showing active faults; no connected test device currently has a fault to capture
- [ ] Dashboard with fault alert banner visible; same blocker as above

### EV Charger (`features/ev-charger`)
- [ ] EV Charger status card on Dashboard; the only EV charger in the test rig is behind a Home Assistant/OCPP integration requiring an access token
- [ ] EV Charger controls card (current limit slider, Plug & Go, etc.) (requires GivLocal Pro + the above)
- [ ] EV Charger schedule card (requires GivLocal Pro + the above)

### Inverter Settings (`features/inverter-settings`)
- [x] Inverter overview section
- [x] Write Log screen
- [x] Live Telemetry screen
- [ ] Battery Control section expanded (requires GivLocal Pro)
- [ ] Power Limits section expanded (requires GivLocal Pro)
- [ ] Advanced section (Export Power Priority, Battery SOC Calibration) (requires GivLocal Pro)
- [ ] EMS Controls section (EMS device only, requires GivLocal Pro)
- [ ] Service section showing restart options (requires GivLocal Pro)
- [ ] Commissioning section (requires GivLocal Installer)

## App Settings

### Appearance & Theme (`app-settings/appearance`)
- [x] Settings > Appearance showing theme and colour palette options

### Dashboard Settings (`app-settings/dashboard`)
- [x] Settings > Dashboard showing toggle options

### Connection & Polling (`app-settings/connection`)
- [x] Settings > Connection screen showing refresh intervals
  - Note: the page text also describes a "Polling method" (Default/Full Telemetry/Battery Meter) and "Quick Actions power settings" subsection under Connection — neither matches the current build (polling method is now a numbered Method 1–6 picker under Diagnostics, and Quick Actions power settings is its own top-level settings section). Flagged for a content review, not just a screenshot gap.

### Diagnostics & Advanced (`app-settings/diagnostics`)
- [x] Settings > Diagnostics screen
- [x] Connection Benchmark results screen

## Remote Access

### Automatic Wi-Fi Switching (`remote-access/automatic-switching`)
- [ ] Settings > Remote Access > Automatic Switching screen showing registered networks (requires GivLocal Pro)

## Cross-Platform Sharing (`cross-platform-sharing`)
- [x] Settings > License section showing Free/Pro/Installer state and available actions
- [ ] Activate on Another Device screen showing the QR code and activation status (requires a device that already owns Pro/Installer)
- [x] Purchased on Another Device screen with code entry
