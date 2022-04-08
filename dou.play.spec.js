const { test, expect } = require('@playwright/test');
const { MainPage } = require('./pom_playwright/pages/main_page');
const Data = require('./test_data/text');
const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = 'debug';

test.beforeEach(async ({ page }) => {
  await page.goto('https://dou.ua/');
  logger.debug('Open the main page')
})

test('check redirect to search page', async ({ page }) => {
  const mainpage = new MainPage(page);

  await mainpage.linkJobPage.click();
  logger.info('clicked the link for job page')
  await expect(page).toHaveURL('https://jobs.dou.ua/');
  await mainpage.clearAndFillDataInSearchInput(Data.text_js);
  await page.locator('input.btn-search').click();
  logger.warn('Redirect to another page')
  logger.error('The link visible')
  await expect(page).toHaveURL('https://jobs.dou.ua/vacancies/?search=JS');
  await page.locator('text=віддалена робота').first().click();
  await expect(page).toHaveURL('https://jobs.dou.ua/vacancies/?remote&from=maybe');

});

test('check search page', async ({ page }) => {
  const mainpage = new MainPage(page);
  
  await mainpage.linkJobPage.click();
  await mainpage.clearAndFillDataInSearchInput('Javascript');
  await page.locator('div.b-inner-page-header h1:has-text("Javascript")').isVisible();
  await mainpage.checkRegionFilter();
})
