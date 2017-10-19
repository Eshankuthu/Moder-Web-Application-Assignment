import { Component} from '@angular/core';

import { Product } from './product';
const PRODUCTS: Product[]=[
  {id:1,name:'Iphone',description:'Iphone 8 New Model 8 month old',price:9, condition:"new",category:'mobile'},
  {id:2,name:'Samsung',description:'Samsung New Model 8 month old',price:8, condition:"used",category:'mobile'},
  {id:3,name:'HP Laptop',description:'Hp Laptop New Model 8 month old',price:7, condition:"discontinued",category:'Laptop'},
  {id:4,name:'Acer Laptop',description:'Hp Laptop New Model 8 month old',price:6, condition:"discontinued",category:'Laptop'},
  {id:5,name:' Laptop',description:'Hp Laptop New Model 8 month old',price:5, condition:"discontinued",category:'Laptop'},
  {id:6,name:'HP Laptop',description:'Hp Laptop New Model 8 month old',price:4, condition:"discontinued",category:'Laptop'},
  {id:7,name:'HP Laptop',description:'Hp Laptop New Model 8 month old',price:3, condition:"discontinued",category:'Laptop'},
  {id:8,name:'HP Laptop',description:'Hp Laptop New Model 8 month old',price:2, condition:"discontinued",category:'Laptop'},
  {id:9,name:'HP Laptop',description:'Hp Laptop New Model 8 month old',price:1, condition:"discontinued",category:'Laptop'},
  {id:10,name:'HP Laptop',description:'Hp Laptop New Model 8 month old',price:5, condition:"discontinued",category:'Laptop'}
];

@Component({
  selector: 'app-root',
  template: `


  <h2>My Product</h2> <button (click)="showProductItem()" class="btn btn-sm btn-primary">Show Product List</button>
  <div *ngIf="showProduct">
 
  <ul class="heroes">
    <li *ngFor="let product of products" 
    [class.selected]="product === selectedProduct"
    (click)="onSelect(product)">
    
    <span class="badge">{{product.id}}</span> {{product.name}}
    </li>
  </ul>
  </div>

  <product-detail [product]="selectedProduct"></product-detail>

  <button (click)="show()" class="btn btn-sm btn-primary">Show Cart List</button>
  <div *ngIf="showcart">
  <cart-detail></cart-detail>
  </div>
 
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent {
  title = 'Tour of Product';

  selectedProduct: Product;
  

  onSelect(product:Product):void{
    this.selectedProduct=product;
  }
  
   products = PRODUCTS;

   showcart : boolean =false;
   show(){
     this.showcart=!this.showcart;
   }

   showProduct:boolean=false;
   showProductItem(){
     this.showProduct=!this.showProduct;
   }
}
