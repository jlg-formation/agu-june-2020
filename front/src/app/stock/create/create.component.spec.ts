import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Routes } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { ArticleService } from 'src/app/services/article.service';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let location: Location;

  const routes: Routes = [{ path: 'stock/list', component: ListComponent }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateComponent, ListComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    location = TestBed.inject(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test that submit is redirecting to /stock/list', fakeAsync(() => {
    component.submit();
    tick();
    const state = location.path();
    expect(state).toBe('/stock/list');
  }));

  it('should test that submit is creating the article', fakeAsync(() => {
    const articleService: ArticleService = TestBed.inject(ArticleService);
    articleService.articles = [];
    articleService.save();
    component.f.setValue({
      name: 'Tournevis',
      price: 2.34,
      qty: 123,
    });
    component.submit();
    tick();
    const result = articleService.articles[0].name === 'Tournevis';
    expect(result).toBeTrue();
  }));

  it('should test that create button is disable if form invalid', fakeAsync(() => {
    component.f.setValue({
      name: '',
      price: 2.34,
      qty: 123,
    });
    fixture.detectChanges();
    const isDisabled = (fixture.nativeElement as HTMLElement).querySelector(
      'button'
    ).disabled;
    expect(isDisabled).toBeTrue();
  }));
});
