import { Component,OnInit} from '@angular/core';

import { Product } from './product';
import{ProductService} from './product.service';

@Component({
  selector: 'app-root',
  template: `


  <h2>My Product</h2>
  <ul class="heroes">
    <li *ngFor="let product of products" 
    [class.selected]="product === selectedProduct"
    (click)="onSelect(product)">
    
    <span class="badge">{{product.id}}</span> {{product.name}}
    </li>
  </ul>

  <product-detail [product]="selectedProduct"></product-detail>
  
  <div>
    <p> NG Switch test</p>
    <li *ngFor="let product of products">
      {{product.name}} -{{product.condition}}
      <span ngSwitch="{{product.condition}}">
        <span *ngSwitchCase="'new'">Brand New !!!</span>
        <span *ngSwitchCase="'discontinued'">NOt USED</span>
      </span>
    
    </li>
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
    color: white;import { ProductService } from './../../../../../Project/SimpleCrud/src/app/Product/product.service';

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
`],
providers: [ProductService]
})

export class AppComponent implements OnInit {
  title = 'Tour of Product';
   products: Product[];
  selectedProduct: Product;
  
constructor(private productService:ProductService){}

// get

getProducts():void{
  this.productService.getProducts().subscribe(products=>this.products=products);
}
  ngOnInit():void{
    this.getProducts();
  }

  onSelect(product:Product):void{
    this.selectedProduct=product;
  
  }


  
  
}
