import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { WidgetModule } from 'src/app/widget/widget.module';
import { ArticleService } from 'src/app/services/article.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [WidgetModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete', () => {
    const articleService: ArticleService = TestBed.inject(ArticleService);
    const article = { id: 'a2', name: 'Tournevis Cruciforme', price: 2.34, qty: 123 };
    articleService.articles = [article];
    articleService.save();
    fixture.detectChanges();
    component.selectedArticles = [article];
    component.delete();
    expect(articleService.articles.length === 0).toBeTrue();
  });

  it('should select', () => {
    const articleService: ArticleService = TestBed.inject(ArticleService);
    const article = { id: 'a2', name: 'Tournevis', price: 2.34, qty: 123 };
    articleService.articles = [article];
    articleService.save();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const cell: HTMLElement = compiled.querySelector('tbody tr td');
    // select
    cell.click();
    expect(component.selectedArticles.length === 1).toBeTrue();
    const row: HTMLElement = compiled.querySelector('tbody tr');
    expect(row.classList.contains('selected')).toBeTrue();
    // deselect
    cell.click();
    expect(component.selectedArticles.length === 0).toBeTrue();
    expect(row.classList.contains('selected')).toBeFalse();
  });
});
