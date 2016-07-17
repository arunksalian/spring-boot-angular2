import { Component } from '@angular/core';
import { BooksComponent } from './child.component';
@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1><books></books>',
  directives : [BooksComponent]
})
export class AppComponent { }
