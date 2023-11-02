import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Reactive Forms';
  fullname:FormControl = new FormControl('');

  email:FormControl = new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);

  password:FormControl = new FormControl('',[Validators.required]);

   login(){
    console.log(this.email,"---",this.password)
    return{
     email: this.email,
     password:this.password
    }
   }
  

  observable = new Observable((observer) => {
    observer.next('Begin subscription to observer');

    setTimeout(() => {
      observer.next('Update in data');
    }, 3000);

    setTimeout(() => {
      observer.complete();
   }, 5000);

    setTimeout(() => {
      observer.error('errorr');
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
        console.log('completed');
      },
    });
  }
}
