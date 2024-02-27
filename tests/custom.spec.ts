import { test } from '@playwright/test';

test.describe('Our first custom tests', async () => {
  test('whole page sceenshot', async ({ page, browserName }) => {
    await page.goto('https://playwright.dev/');
    await page
      .screenshot({ animations: 'disabled', path: `wholePage${browserName}.png`, fullPage: true });
  });
});
