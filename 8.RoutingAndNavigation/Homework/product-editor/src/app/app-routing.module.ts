
import { NgModule } from '@angular/core';

import { RouterModule ,Routes}   from '@angular/router';

import { ProductDetailComponent } from './product-detail.component';

import {ProductService} from './product.service';
import {ProductsComponent} from './products.component';
import {DashboardComponent} from './dashboard.component';


const routes: Routes = [
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'detail/:id',
      component: ProductDetailComponent
    },
    {
      path:'products',
      component:ProductsComponent,
      
    }
  ];
  
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]

})

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })

export class AppRoutingModule  { }


