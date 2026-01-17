// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Vercel 배포 후 실제 할당된 URL로 교체 (예: https://vivasu-beauty-123abc.vercel.app)
  site: 'https://vivasu-beauty.vercel.app',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});