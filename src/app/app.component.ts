import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'observable-blog';
  observable = new Observable((observer) => {
    observer.next('Begin subscription to observer');

    setTimeout(() => {
      observer.next('Update in data');
    }, 3000);

    setTimeout(() => {
      observer.complete();
    }, 5000);

    setTimeout(() => {
      observer.error('errorrr');
    }, 4000);
  });

  ngOnInit() {
    this.observable.subscribe({
      next: (val) => {
        console.log(val);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('nn');
      },
    });
  }
}
