// import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://abem.dev',
    integrations: [
        sitemap(),
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
    ],
    output: 'server',
    adapter: cloudflare(),
    image: {
        service: {
            entrypoint: 'astro/assets/services/noop',
        },
    },
});
