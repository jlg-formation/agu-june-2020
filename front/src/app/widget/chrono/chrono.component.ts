import { Component, OnInit } from '@angular/core';
import {
  interval,
  Observable,
  Subject,
  timer,
  BehaviorSubject,
  Subscription,
} from 'rxjs';
import { map, startWith, subscribeOn } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss'],
})
export class ChronoComponent {
  counter$ = new BehaviorSubject(0);
  pageCounter$ = new BehaviorSubject(0);
  subscription: Subscription;
  constructor(private router: Router) {
    interval(1000)
      .pipe(map((x) => x + 1))
      .subscribe(this.counter$);

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (this.subscription) {
          this.subscription.unsubscribe();
        }
        this.subscription = interval(1000)
          .pipe(
            map((x) => x + 1),
            startWith(0)
          )
          .subscribe(this.pageCounter$);
      }
    });
  }
}
