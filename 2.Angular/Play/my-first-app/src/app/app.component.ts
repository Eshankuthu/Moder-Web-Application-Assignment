import { MyFirstComponent } from './my-component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      app Works!
    </p>
    <my-component></my-component>
  `
  ,
  
  styles: []
})
export class AppComponent {
  title = 'app';
  
}
