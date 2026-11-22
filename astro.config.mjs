// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://docs.invlocal.app',
    integrations: [
        starlight({
            title: 'INVLocal',
            description:
                'Documentation for INVLocal, an app for local monitoring and control of your solar and battery system. Works with GivEnergy hardware.',
            favicon: '/favicon.png',
            logo: {
                src: './src/assets/icon.png',
                replacesTitle: false,
            },
            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        { label: 'Introduction', slug: 'getting-started/introduction' },
                        { label: 'Installation', slug: 'getting-started/installation' },
                        { label: 'Connecting to Your System', slug: 'getting-started/connecting' },
                        { label: 'Device Discovery', slug: 'getting-started/device-discovery' },
                    ],
                },
                {
                    label: 'Features',
                    items: [
                        { label: 'Live Power Flow', slug: 'features/power-flow' },
                        { label: 'Customising the Dashboard', slug: 'features/customizing-dashboard' },
                        { label: 'Energy Stats', slug: 'features/energy-stats' },
                        { label: 'Battery Management', slug: 'features/battery-management' },
                        { label: 'Battery Cell Details', slug: 'features/battery-cell-details' },
                        { label: 'Schedules', slug: 'features/schedules' },
                        { label: 'EV Charger', slug: 'features/ev-charger' },
                        { label: 'Inverter Settings', slug: 'features/inverter-settings' },
                        { label: 'Fault Log', slug: 'features/fault-log' },
                    ],
                },
                {
                    label: 'App Settings',
                    items: [
                        { label: 'General', slug: 'app-settings/general' },
                        { label: 'Appearance & Theme', slug: 'app-settings/appearance' },
                        { label: 'Connection & Polling', slug: 'app-settings/connection' },
                        { label: 'Dashboard', slug: 'app-settings/dashboard' },
                        { label: 'Quick Actions', slug: 'app-settings/quick-actions' },
                        { label: 'Diagnostics & Advanced', slug: 'app-settings/diagnostics' },
                        { label: 'App Data', slug: 'app-settings/app-data' },
                    ],
                },
                {
                    label: 'Remote Access',
                    items: [
                        { label: 'Overview', slug: 'remote-access/overview' },
                        { label: 'Tailscale', slug: 'remote-access/tailscale' },
                        { label: 'Automatic Wi-Fi Switching', slug: 'remote-access/automatic-switching' },
                        { label: 'Port Forwarding', slug: 'remote-access/port-forwarding' },
                    ],
                },
                {
                    label: 'Supported Devices',
                    slug: 'supported-devices',
                },
                {
                    label: 'Pro & Installer',
                    slug: 'pro',
                },
                {
                    label: 'Cross-Platform Sharing',
                    slug: 'cross-platform-sharing',
                },
                {
                    label: 'Legal',
                    items: [
                        { label: 'End User Licence Agreement', slug: 'eula' },
                        { label: 'Privacy Policy', slug: 'privacy' },
                    ],
                },
            ],
            customCss: ['./src/styles/custom.css'],
            components: {
                Footer: './src/components/Footer.astro',
            },
        }),
    ],
});
