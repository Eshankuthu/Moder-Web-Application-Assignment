
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import {SummaryPipe} from './product.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


