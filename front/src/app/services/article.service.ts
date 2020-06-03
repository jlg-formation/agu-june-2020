import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles = this.restore();
  constructor() {
    console.log('coucou je cree le article service');
  }

  restore(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [
        { name: 'Tournevis', price: 2.34, qty: 123 },
        { name: 'Marteau', price: 4.56, qty: 10 },
        { name: 'Scie', price: 7.86, qty: 13 },
        { name: 'Pince', price: 3.0, qty: 15 },
        { name: 'Clé à molette en prix disounted', price: 3.0, qty: 15 },
      ];
    }
    return JSON.parse(str) as Article[];
  }

  save() {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  add(article: Article) {
    this.articles.push(article);
    this.save();
  }

  delete(selectedArticles: Article[]) {
    for (const article of selectedArticles) {
      this.deleteOne(article);
    }
  }

  deleteOne(article: Article) {
    const index = this.articles.findIndex((a) => a === article);
    this.articles.splice(index, 1);
    this.save();
  }
}
