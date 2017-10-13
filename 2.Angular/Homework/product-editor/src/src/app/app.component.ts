import { Component } from '@angular/core';
type conditiontype ="new" | "used" | "discontinued";
export class Product{
  id:number;
  name:string;
  description:string;
  price:number;
  condition: conditiontype
  category:string;
}

const PRODUCTS: Product[]=[
  {id:1,name:'iphone',description:'Iphone 8 New Model 8 month old',price:9999, condition:"new",category:'mobile'},
  {id:2,name:'Samsung',description:'Samsung New Model 8 month old',price:9999, condition:"used",category:'mobile'},
  {id:3,name:'HP Laptop',description:'Hp Laptop New Model 8 month old',price:109999, condition:"discontinued",category:'Laptop'},
  {id:4,name:'Acer Laptop',description:'Hp Laptop New Model 8 month old',price:109999, condition:"discontinued",category:'Laptop'},
  {id:5,name:' Laptop',description:'Hp Laptop New Model 8 month old',price:109999, condition:"discontinued",category:'Laptop'},
  {id:6,name:'HP Laptop',description:'Hp Laptop New Model 8 month old',price:109999, condition:"discontinued",category:'Laptop'},
  {id:7,name:'HP Laptop',description:'Hp Laptop New Model 8 month old',price:109999, condition:"discontinued",category:'Laptop'},
  {id:8,name:'HP Laptop',description:'Hp Laptop New Model 8 month old',price:109999, condition:"discontinued",category:'Laptop'},
  {id:9,name:'HP Laptop',description:'Hp Laptop New Model 8 month old',price:109999, condition:"discontinued",category:'Laptop'},
  {id:10,name:'HP Laptop',description:'Hp Laptop New Model 8 month old',price:109999, condition:"discontinued",category:'Laptop'}
];

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>{{product.name}} Details</h2>
    <div><label>id :</label>{{product.id}}</div>
    <div><label>name :</label>{{product.id}}</div>
    <div><label>description :</label>{{product.description}}</div>
    <div><label>price :</label>{{product.price}}</div>
    <div><label>condition :</label>{{product.condition}}</div>
    <div><label>category :</label>{{product.category}}</div>
    <div>
    <label>name: </label>
    <input [(ngModel)]="product.name" placeholder="name">
  </div>


  <h2>My Product</h2>
  <ul class="heroes">
    <li *ngFor="let product of products">
     <span class="badge">{{product.id}}</span> {{product.name}}
    </li>
  </ul>
  
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
  
   product: Product={
     id:1,
     name:'iphone',
     description:'Iphone 8 New Model 8 month old',
     price:89999,
     condition:"new",
     category:'mobile'
   }

   products = PRODUCTS;
}
