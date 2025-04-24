// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    trace: 'on',
  },
  reporter: [['html', { open: 'never' }]], // o 'on', si querés que se abra automáticamente
});