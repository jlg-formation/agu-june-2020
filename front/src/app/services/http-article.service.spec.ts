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
    // simulate first refresh (in the constructor)
    httpMock.expectOne(`/ws/articles`).flush([...articles]);

    // preparing add
    const article = {
      name: 'Scie',
      price: 2.34,
      qty: 123,
    } as Article;
    service.add(article);
    const createdArticle = { ...article, id: 'a34' };
    const request = httpMock.expectOne(`/ws/articles`);
    expect(request.request.method).toBe('POST');
    request.flush(createdArticle, {
      status: 201,
      statusText: 'Created',
    });

    // simulate refresh after adding article
    const newArticles = [...articles, createdArticle];
    httpMock.expectOne(`/ws/articles`).flush(newArticles);

    expect(service.articles.length === 3).toBeTrue();
    console.log('service.articles.length: ', service.articles.length);
  }));

  afterEach(() => {
    httpMock.verify();
  });
});
