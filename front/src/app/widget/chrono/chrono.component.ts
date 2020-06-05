import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss'],
})
export class ChronoComponent implements OnInit {
  counter = 90;

  constructor() {}

  ngOnInit(): void {
    interval(1000).pipe(
      map((x) => x + 1),
      startWith(0)
    ).subscribe((val) => (this.counter = val));
  }
}
