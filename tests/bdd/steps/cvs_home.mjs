import { Given, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, firefox, webkit } from 'playwright';
import { expect as pwExpect } from '@playwright/test';

setDefaultTimeout(60_000);

let browser, page;

async function dismissPopups(p) {
  const accept = p.locator('#onetrust-accept-btn-handler');
  if (await accept.isVisible().catch(() => false)) await accept.click().catch(() => {});
  const closeBtn = p.getByRole('button', { name: /close/i });
  if (await closeBtn.isVisible().catch(() => false)) await closeBtn.click().catch(() => {});
  const survey = p.frameLocator('iframe[src*="medallia" i], iframe[title*="survey" i]').first();
  const noThanks = survey.getByRole('button', { name: /(no, thanks|close)/i });
  if (await noThanks.isVisible().catch(() => false)) await noThanks.click().catch(() => {});
}

const BROWSER = (process.env.BROWSER ?? 'firefox').toLowerCase();

Given('I open the CVS home page', async () => {
  const launcher = BROWSER === 'chromium' ? chromium : BROWSER === 'webkit' ? webkit : firefox;
  browser = await launcher.launch({ headless: true });
  const ctx = await browser.newContext();
  page = await ctx.newPage();
  await page.goto('https://www.cvs.com/', { waitUntil: 'domcontentloaded' });
  await dismissPopups(page);
});

Then('I am on a CVS URL', async () => {
  await pwExpect(page).toHaveURL(/https:\/\/(www\.)?cvs\.com(\/|$)/i);
});

Then('I can see the Sign in link', async () => {
  await pwExpect(page.getByRole('link', { name: /sign in/i })).toBeVisible({ timeout: 15000 });
  await browser?.close();
});
