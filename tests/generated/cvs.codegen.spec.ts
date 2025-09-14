import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.cvs.com/');
  await expect(page.locator('#cvs-desktop-header-container')).toContainText('Shop');
  await expect(page.locator('#cvs-desktop-header-container')).toContainText('Deals of the Week');
  await expect(page.locator('#cvs-desktop-header-container')).toContainText('Manage Prescriptions');
  await expect(page.locator('#main-content')).toMatchAriaSnapshot(
    `- heading /Updated COVID-\\d+ vaccines are now available\\./ [level=2]`,
  );
});
