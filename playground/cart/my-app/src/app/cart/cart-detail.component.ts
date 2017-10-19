
import { Component, Input } from '@angular/core';
import {Cart,CartItem} from './cart';
import {CartService} from './cart.service'
import {CalculationPrice} from './cart.pipe';
@Component({
    selector: 'cart-detail',
    template:`
    <ul *ngFor="let item of cart.cartItem" >
    <h1>Cart Item List</h1>
       <p>Item quantity {{item.quantity}} </p>
       <p>Product {{item.product.name}}</p>
       <p>Total Price with Quantity{{item.product.price | calculation: item.quantity}}</p>
    </ul>
    <h2>Total Price for All Item {{cart.addTotal()}}</h2>
`
    
})

export class CartDetailComponent{
     
    cart:Cart;
    constructor(private _cartService:CartService){
        this.cart=_cartService.cart;
    }

         
   }
 
