import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { HighLightDirective } from './myhighlight.directive';
import { ProductDetailComponent } from './product-detail.component';
import {CartModule} from './cart/cart.module';


@NgModule({
  declarations: [
    AppComponent,HighLightDirective,ProductDetailComponent
  ],
  imports: [
    BrowserModule,CartModule,FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
