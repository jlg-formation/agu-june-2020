import { browser, by, element } from 'protractor';
import { Article } from 'src/app/interfaces/article';

export class CreatePage {
  async fillForm(article: Article) {
    const name = element(by.css('input[formcontrolname="name"]'));
    await name.clear();
    await name.sendKeys(article.name);
    const price = element(by.css('input[formcontrolname="price"]'));
    await price.clear();
    await price.sendKeys(article.price);
    const qty = element(by.css('input[formcontrolname="qty"]'));
    await qty.clear();
    await qty.sendKeys(article.qty);
  }

  async submitForm() {
    await element(by.cssContainingText('button', 'Créer')).click();
  }
}
