import { browser, by, element } from 'protractor';
import { Article } from 'src/app/interfaces/article';

export class ListPage {
  async clickOnAddButton() {
    await element(by.css('button[routerlink="/stock/create"]')).click();
  }

  async isArticleExisting(article: Article): Promise<boolean> {
    const cell = element(by.cssContainingText('tbody td.name', article.name));
    console.log('cell: ', cell);
    return cell.isPresent();
  }

  async select(article: Article): Promise<void> {
    const cell = element(by.cssContainingText('tbody td.name', article.name));
    return cell.click();
  }

  clickOnSuppressButton() {
    const button = element(by.css('button.delete'));
    return button.click();
  }
}
