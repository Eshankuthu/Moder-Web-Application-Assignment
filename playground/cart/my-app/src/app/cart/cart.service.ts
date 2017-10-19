import{Injectable} from '@angular/core';
import{Cart,CartItem} from  './cart';
import {Product} from '../product';

@Injectable()
export class CartService{
    
    cart: Cart=new Cart();
    addToCart(product:Product,quantity:number){
        let item = new CartItem();
        item.product=product;
        item.quantity=quantity;
        this.cart.addItem(item);
        
    }
}