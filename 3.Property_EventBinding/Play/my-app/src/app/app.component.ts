
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <h1>This is Parent</h1>
        <h2> {{showMessage}}</h2>
         <child-component (notify)="onNotifyClicker($event)"></child-component>
          
  `
  ,
  styleUrls: []
}) 
export class AppComponent  {
  title = 'app';

  showMessage="";
  
  onNotifyClicker(message:string):void{
    this.showMessage=message;
  }

  book:any[]=[{
    bookReview:"hello from parent"
  }]
  
}

// <child-component [reviews]="15"></child-component>
