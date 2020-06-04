import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    service = TestBed.inject(ArticleService);
    expect(service).toBeTruthy();
  });

  it('should return zero articles', () => {
    localStorage.removeItem('articles');
    service = TestBed.inject(ArticleService);
    expect(service).toBeTruthy();
  });
});
