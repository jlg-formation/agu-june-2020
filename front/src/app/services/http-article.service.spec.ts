import { TestBed, tick, fakeAsync } from '@angular/core/testing';

import { HttpArticleService } from './http-article.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Article } from '../interfaces/article';

describe('HttpArticleService', () => {
  let service: HttpArticleService;
  let httpMock: HttpTestingController;

  const articles: Article[] = [
    {
      id: 'a3',
      name: 'Tournevis',
      price: 2.34,
      qty: 123,
    },
    {
      id: 'a5',
      name: 'Marteau',
      price: 2.34,
      qty: 123,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    httpMock.expectOne(`/ws/articles`).flush(articles);
    expect(service).toBeTruthy();
  });

  it('should be created with refresh error', () => {
    httpMock.expectOne(`/ws/articles`).flush('Invalid request parameters', {
      status: 404,
      statusText: 'Not Found',
    });
    expect(service).toBeTruthy();
  });

  it('should add an article in the back-end', fakeAsync(() => {
    httpMock.expectOne(`/ws/articles`).flush(articles);

    const article = {
      name: 'Scie',
      price: 2.34,
      qty: 123,
    } as Article;
    tick();
    service.add(article);
    const createdArticle = { ...article, id: 'a34' };
    const request = httpMock.expectOne(`/ws/articles`);
    expect(request.request.method).toBe('POST');
    request.flush(createdArticle, {
      status: 201,
      statusText: 'Created',
    });
    tick();
    const newArticles = [...articles, article];
    httpMock.expectOne(`/ws/articles`).flush(newArticles);
    expect(service.articles.length === 3).toBeTrue();
  }));

  afterEach(() => {
    httpMock.verify();
  });
});
