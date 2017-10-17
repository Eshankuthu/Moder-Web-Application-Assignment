import { Product } from './product';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'product-detail',
    template:`
     <div *ngIf="product else elseBlock">
        <h2>{{product.name}} Details</h2>
        <h2>{{product.description | summary:10}}</h2>
        <div><label>id : </label>{{product.id}}</div>
        <div>
            <label>name: </label>
            <input [ngModel]="product.name | uppercase" placeholder="name"/>
            <input [ngModel]="product.description" placeholder="decription"
            (ngModelChange)="setUppercaseName($event)">
        </div>
        <div>
            {{product | json}}
        </div>
      
     </div>
     <ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>
`
})

export class ProductDetailComponent{
   @Input() product: Product;




}