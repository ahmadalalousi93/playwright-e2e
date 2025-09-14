import { test, expect } from '@playwright/test';

test('homepage has Example in title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Example/);
});
