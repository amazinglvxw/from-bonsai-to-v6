import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://amazinglvxw.github.io',
  base: '/from-bonsai-to-v6',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
