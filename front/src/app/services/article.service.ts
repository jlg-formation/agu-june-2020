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
      return [];
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

  refresh() {}
}
