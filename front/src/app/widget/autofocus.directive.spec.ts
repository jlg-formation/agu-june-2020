import { Component } from '@angular/core';
import { ComponentFixture, async, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { AutofocusDirective } from './autofocus.directive';

@Component({
  template: `<input type="text" appAutofocus />`,
})
class FakeComponent {}

describe('AutofocusDirective', () => {
  let component: FakeComponent;
  let fixture: ComponentFixture<FakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FakeComponent, AutofocusDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should put the focus on the input', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const hasFocus = document.activeElement === compiled.querySelector('input');
    expect(hasFocus).toBeTrue();
  });
});
