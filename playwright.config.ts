import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: 'tests',
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:8080',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:8080',
  },
});