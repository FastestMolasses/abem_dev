/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                // primary: {
                //     DEFAULT: 'hsl(var(--primary))',
                //     foreground: 'hsl(var(--primary-foreground))',
                // },
                // secondary: {
                //     DEFAULT: 'hsl(var(--secondary))',
                //     foreground: 'hsl(var(--secondary-foreground))',
                // },
                // destructive: {
                //     DEFAULT: 'hsl(var(--destructive))',
                //     foreground: 'hsl(var(--destructive-foreground))',
                // },
                // muted: {
                //     DEFAULT: 'hsl(var(--muted))',
                //     foreground: 'hsl(var(--muted-foreground))',
                // },
                // accent: {
                //     DEFAULT: 'hsl(var(--accent))',
                //     foreground: 'hsl(var(--accent-foreground))',
                // },
                // popover: {
                //     DEFAULT: 'hsl(var(--popover))',
                //     foreground: 'hsl(var(--popover-foreground))',
                // },
                // card: {
                //     DEFAULT: 'hsl(var(--card))',
                //     foreground: 'hsl(var(--card-foreground))',
                // },

                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                },
                'primary-hover': {
                    DEFAULT: 'hsl(var(--primary-hover))',
                },
                'primary-muted': {
                    DEFAULT: 'hsl(var(--primary-muted))',
                },

                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                },
                'secondary-hover': {
                    DEFAULT: 'hsl(var(--secondary-hover))',
                },
                'secondary-muted': {
                    DEFAULT: 'hsl(var(--secondary-muted))',
                },

                link: {
                    DEFAULT: 'hsl(var(--link))',
                },
                'link-hover': {
                    DEFAULT: 'hsl(var(--link-hover))',
                },
                'link-muted': {
                    DEFAULT: 'hsl(var(--link-muted))',
                },

                active: {
                    DEFAULT: 'hsl(var(--active))',
                },
                'active-hover': {
                    DEFAULT: 'hsl(var(--active-hover))',
                },
                'active-muted': {
                    DEFAULT: 'hsl(var(--active-muted))',
                },

                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                },
                'accent-hover': {
                    DEFAULT: 'hsl(var(--accent-hover))',
                },
                'accent-muted': {
                    DEFAULT: 'hsl(var(--accent-muted))',
                },

                border: {
                    DEFAULT: 'hsl(var(--border))',
                },

                background: {
                    DEFAULT: 'hsl(var(--background))',
                },
                foreground: {
                    DEFAULT: 'hsl(var(--foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
