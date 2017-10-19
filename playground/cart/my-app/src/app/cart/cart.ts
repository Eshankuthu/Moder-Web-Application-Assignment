import { Product } from '../product';

export class Cart{
            
    cartItem: CartItem[] = new Array();
    constructor(){
        // let product:Product =new Product();
        // let cartItem=new CartItem();
        // cartItem.product=product;
        // cartItem.quantity=1;
        // this.cart.push(cartItem);
    }
    addItem(cartItem){
        this.cartItem.push(cartItem);
    }
 

    addTotal():number{
    //    return  this.cartItem.reduce((sum,item)=>sum+item.product.price*item.quantity,0);

      var sum:any=0;
      for(let i :number=0; i<this.cartItem.length;i++){
         sum=sum+ this.cartItem[i].product.price*this.cartItem[i].quantity;
      }
      return sum;
    }
 
}
    

export class CartItem{
    product:Product;
    quantity:number;
}