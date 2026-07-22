# Screenshots Needed

## Features

### Battery Cell Details (`features/battery-cell-details`)
- [ ] Battery cell detail sheet - LV battery (per-cell voltages + temperatures); no LV battery hardware was available to capture this
- [x] Battery cell detail sheet - HV battery (BMU/BCU pack view)

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
  - Note: the Restore Defaults power-limit table was corrected - Gateway resets to 100%/100%, but AC-Coupled actually resets to 50%/50% (it has a real DC battery circuit, unlike Gateway). No screenshot impact, content-only fix.

## App Settings

### Appearance & Theme (`app-settings/appearance`)
- [x] Settings > Appearance showing theme and colour palette options

### Dashboard Settings (`app-settings/dashboard`)
- [x] Settings > Dashboard showing toggle options

### Connection & Polling (`app-settings/connection`)
- [x] Settings > Connection screen showing refresh intervals
  - Resolved: "Quick Actions power settings" has been moved out to its own page/section (see below) since it's a separate top-level settings section in the app, not part of Connection. The "Polling method" table (Default/Full Telemetry/Battery Meter) was re-verified against source and does correctly describe the Connection section's Polling Method dropdown - no change needed there.
- [ ] Adaptive connection details screen (Status, Inverter, Observations, and the reset action) - new content added for the previously-undocumented Adaptive Inverter Connection toggle

### Quick Actions (`app-settings/quick-actions`) - new page
- [ ] Settings > Quick Actions screen showing both "Use Max Power" toggles

### Battery Diagnostics (`app-settings/battery-diagnostics`) - new page
- [ ] Settings > Battery Diagnostics screen showing the Show Calculated State of Health toggle

### Diagnostics & Advanced (`app-settings/diagnostics`)
- [x] Settings > Diagnostics screen
- [x] Connection Benchmark results screen
  - Note: this page now also documents "Permissive Device Detection" (previously only visible in the screenshot's alt text, never explained in prose). The existing screenshot already shows it, so no new capture is needed here.

## Remote Access

### Automatic Wi-Fi Switching (`remote-access/automatic-switching`)
- [ ] Settings > Remote Access section with Tailscale and Automatic Switching expanded, showing registered networks (requires GivLocal Pro)
  - Note: page content corrected - this is a nested toggle inside the Tailscale block of the Remote Access section, not a standalone screen. Setup steps and button labels ("Add Current", pencil icon for manual entry) updated to match the current build.

## Cross-Platform Sharing (`cross-platform-sharing`)
- [x] Settings > License section showing Free/Pro/Installer state and available actions
- [ ] Activate on Another Device screen showing the QR code and activation status (requires a device that already owns Pro/Installer)
- [x] Purchased on Another Device screen with code entry
