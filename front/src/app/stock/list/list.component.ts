import { Component, OnInit } from '@angular/core';
import { faRedo, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  faRedo = faRedo;
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;

  selectedArticles: Article[] = [];

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  select(event: MouseEvent, article: Article) {
    console.log('select', event);
    const cell = event.target as HTMLElement;
    const row = cell.parentElement;
    console.log('row: ', row);
    if (row.classList.contains('selected')) {
      row.classList.remove('selected');
      const index = this.selectedArticles.findIndex((a) => a === article);
      this.selectedArticles.splice(index, 1);
      console.log('this.selectedArticles: ', this.selectedArticles);
      return;
    }
    row.classList.add('selected');
    this.selectedArticles.push(article);
    console.log('this.selectedArticles: ', this.selectedArticles);
  }
}
