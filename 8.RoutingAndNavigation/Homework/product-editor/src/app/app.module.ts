
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import {SummaryPipe} from './product.pipe';
import {ProductService} from './product.service';
import {ProductsComponent} from './products.component';
import {DashboardComponent} from './dashboard.component';
import {AppRoutingModule} from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    SummaryPipe,
    ProductsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,FormsModule ,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }


