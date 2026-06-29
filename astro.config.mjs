// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    integrations: [
        starlight({
            title: 'GivLocal',
            description: 'Local control for your GivEnergy system — no cloud required.',
            logo: {
                src: './src/assets/icon.png',
                replacesTitle: false,
            },
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/Thomserve/GivLocalApp' },
            ],
            editLink: {
                baseUrl: 'https://github.com/Thomserve/GivLocalApp/edit/main/docs/',
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
                        { label: 'Energy Stats', slug: 'features/energy-stats' },
                        { label: 'Battery Management', slug: 'features/battery-management' },
                        { label: 'Schedules', slug: 'features/schedules' },
                        { label: 'Inverter Settings', slug: 'features/inverter-settings' },
                    ],
                },
                {
                    label: 'Remote Access',
                    items: [
                        { label: 'Overview', slug: 'remote-access/overview' },
                        { label: 'Tailscale', slug: 'remote-access/tailscale' },
                        { label: 'Port Forwarding', slug: 'remote-access/port-forwarding' },
                    ],
                },
                {
                    label: 'Supported Devices',
                    slug: 'supported-devices',
                },
            ],
            customCss: ['./src/styles/custom.css'],
        }),
    ],
});
