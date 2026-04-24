import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.hypermemetic.ai',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
