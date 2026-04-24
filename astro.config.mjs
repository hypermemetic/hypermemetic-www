import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hypermemetic.ai',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
