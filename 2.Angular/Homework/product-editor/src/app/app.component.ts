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
  `,
  styles: []
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
}
