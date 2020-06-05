import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { Article } from '../../src/app/interfaces/article';
import { ListPage } from './list.po';
import { CreatePage } from './create.po';

describe('Articles CRUD', () => {
  let page: AppPage;
  let listPage: ListPage;
  let createPage: CreatePage;

  beforeEach(() => {
    page = new AppPage();
    listPage = new ListPage();
    createPage = new CreatePage();
  });

  it('should create and delete an article', async () => {
    const article: Article = {
      name: 'a' + Math.round(Math.random() * 1e6),
      price: 4.12,
      qty: 34,
    };
    page.navigateTo();
    await page.clickOnSeeStockButton();
    await listPage.clickOnAddButton();
    await createPage.fillForm(article);
    await createPage.submitForm();
    const result = await listPage.isArticleExisting(article);
    expect(result).toEqual(true);
    await listPage.select(article);
    await listPage.clickOnSuppressButton();
    expect(await listPage.isArticleExisting(article)).toEqual(false);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
