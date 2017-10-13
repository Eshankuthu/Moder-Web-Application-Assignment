
import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'child-component',
  template: `
        <h1>Hello</h1>
         <h3>{{reviews}}</h3> 
         <div (click)="OnClick()">
            <button>Click Me</button>
         </div>
  `
  ,
  styleUrls: []
}) 
export class ChildComponent  {
  title = 'child';
 
  @Input() reviews:number;

  @Output() notify:EventEmitter<string>=new EventEmitter<string>();

  OnClic():void{
      this.notify.emit("Message from child");
  }
  
}