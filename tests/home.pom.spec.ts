import { test } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test('CVS home page loads and Sign in is visible', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.assertSignInVisible();
});
