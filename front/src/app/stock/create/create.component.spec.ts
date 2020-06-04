import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router, Routes } from '@angular/router';
import { ListComponent } from '../list/list.component';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let location: Location;
  // let router: Router;

  const routes: Routes = [
    { path: 'stock/list', component: ListComponent },
  ];

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
    // router = TestBed.inject(Router);
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
});
