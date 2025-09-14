import { Page, Locator, expect } from '@playwright/test';

/** click the first locator that is actually visible */
async function clickIfVisible(l: Locator) {
  try {
    if (await l.first().isVisible({ timeout: 800 })) {
      await l
        .first()
        .click({ trial: false })
        .catch(() => {});
      return true;
    }
  } catch {}
  return false;
}

export async function dismissCommonPopups(page: Page) {
  await clickIfVisible(page.locator('#onetrust-accept-btn-handler'));

  await clickIfVisible(page.getByRole('button', { name: /^close$/i }));

  await clickIfVisible(page.getByRole('button', { name: /(accept|agree|allow|ok|okay|got it)/i }));

  const survey = page
    .frameLocator(
      'iframe[src*="medallia" i], iframe[title*="survey" i], iframe[title*="feedback" i]',
    )
    .first();
  await clickIfVisible(survey.getByRole('button', { name: /(no, thanks|close)/i }));

  await clickIfVisible(page.getByRole('button', { name: /(close|dismiss|not now|cancel)/i }));
  await clickIfVisible(page.locator('[aria-label="Close"], [data-action="close"], .close'));

  await page.keyboard.press('Escape').catch(() => {});

  await expect(page).not.toHaveTitle(/access denied|blocked|error/i);
}
