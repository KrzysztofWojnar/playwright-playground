import { test } from '@playwright/test';
import { describe } from 'node:test';

describe('Our first custom tests', async () => {
  test('stack overflow', async ({ page, browserName }) => {
    await page.goto('https://playwright.dev/');
    await page
      .getByRole('link', {name: 'Stack Overflow'})
      .screenshot({ animations: 'disabled', path: `stackOverflow${browserName}.png` });
  });
});
