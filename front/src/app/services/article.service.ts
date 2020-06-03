import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    { name: 'Tournevis', price: 2.34, qty: 123 },
    { name: 'Marteau', price: 4.56, qty: 10 },
    { name: 'Scie', price: 7.86, qty: 13 },
    { name: 'Pince', price: 3.0, qty: 15 },
    { name: 'Clé à molette en prix disounted', price: 3.0, qty: 15 },
  ];

  constructor() {
    console.log('coucouc je cree le article service');
  }

  add(article: Article) {
    this.articles.push(article);
  }
}
