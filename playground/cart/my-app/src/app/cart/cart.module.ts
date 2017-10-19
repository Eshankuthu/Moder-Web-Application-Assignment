import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {ProductDetailComponent} from '../product-detail.component';
import {CartService} from './cart.service';
import {CartDetailComponent} from './cart-detail.component';
import {CalculationPrice} from './cart.pipe';

@NgModule({
  declarations: [
    CartDetailComponent,CalculationPrice
  ],
  imports: [
    BrowserModule
  ],
  exports:[CartDetailComponent],
  providers: [CartService],

})
export class CartModule { }
