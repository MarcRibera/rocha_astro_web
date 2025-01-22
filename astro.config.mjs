import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compressor from 'astro-compressor';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: 'https://fillsrocha.com',
  image: {
    domains: ['images.unsplash.com'],
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'cat'],
    fallback: {
      cat: 'es',
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          en: 'es',
          cat: 'ca',
        },
      },
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    mdx(),
  ],
  experimental: {
    clientPrerender: false,
  },
});
