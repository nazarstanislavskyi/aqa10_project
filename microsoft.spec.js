const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  await page.goto('https://www.microsoft.com/uk-ua/');
  await page.locator('text=Microsoft OneDrive').click();
  await expect(page).toHaveURL('https://www.microsoft.com/uk-ua/microsoft-365/onedrive/online-cloud-storage?icid=mscom_marcom_CPH3a_OneDrive');
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.microsoft.com/uk-ua/microsoft-365/onedrive/compare-onedrive-plans?activetab=tab:primaryr1' }*/),
    page.locator('text=Переглянути плани та ціни').first().click()
  ]);
  await page.locator('a[role="tab"]:has-text("Для бізнесу")').click();
  await expect(page).toHaveURL('https://www.microsoft.com/uk-ua/microsoft-365/onedrive/compare-onedrive-plans?activetab=tab:primaryr2');
  await page.locator('div:nth-child(17) .ow-icons-wrapper .ow-icons div .ow-icon').click();
  await page.locator('[aria-label="Центр розробників Розробка й ІТ"]').click();
  await expect(page).toHaveURL('https://developer.microsoft.com/en-gb/');
});