import { Product } from './product';
import { Component, Input } from '@angular/core';
import {CartService} from './cart/cart.service';

@Component({
    selector: 'product-detail',
    template:`
     <div *ngIf="product else elseBlock">
     <div>
     <label>Name: </label>
     <input [(ngModel)]="product.name" placeholder="name"/>
   </div>
        
        <h2>{{product.description}}</h2>
        <h2>{{product.price}}</h2>
        <input #box (keyup)="onKey(box.value)">
        <button (click)="add(product,box.value)" class="btn btn-sm btn-primary">Add to Cart</button>
      
     </div>

     
     <ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>
`
    
})

export class ProductDetailComponent{
   @Input() product: Product;

   constructor(private _cartService:CartService){}

   add(product:Product,quantity:number) {
    this._cartService.addToCart(product,quantity);
       
        
  }


}