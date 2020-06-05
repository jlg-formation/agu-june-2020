import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss'],
})
export class ChronoComponent implements OnInit {
  counter = 90;

  constructor() {}

  ngOnInit(): void {
    // observable qui compte jusqu'à 11 et qui part en erreur aussitot.
    const myInterval = new Observable<number>((observer) => {
      const obj = {
        counter: 0,
      };
      observer.next(obj.counter);
      obj.counter++;
      const timeout = setInterval(() => {
        console.log('interval going', obj.counter);
        if (obj.counter > 10) {
          observer.error('oui je suis une erreur');
          clearInterval(timeout);
        }
        observer.next(obj.counter);
        obj.counter++;
      }, 1000);

      // si on interrompt l'observable il se nettoie tout seul
      observer.add(() => {
        clearInterval(timeout);
      });
    });
    const subsbription = myInterval.subscribe({
      next: (val) => {
        this.counter = val;
        if (val > 5) {
          subsbription.unsubscribe();
        }
      },
      error: (err) => (this.counter = err),
    });
  }
}
