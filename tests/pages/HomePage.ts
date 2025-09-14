import { Page, expect } from '@playwright/test';
import { dismissCommonPopups } from '../utils/ui-guards';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.cvs.com/', { waitUntil: 'domcontentloaded' });
    await dismissCommonPopups(this.page);
    await expect(this.page).toHaveURL(/https:\/\/(www\.)?cvs\.com(\/|$)/i);
  }

  async assertSignInVisible() {
    await expect(this.page.getByRole('link', { name: /sign in/i })).toBeVisible({ timeout: 15000 });
  }
}
