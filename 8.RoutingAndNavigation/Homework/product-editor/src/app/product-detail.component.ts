import { Product } from './product';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {ProductService} from './product.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'product-detail',
    templateUrl:'./product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
   @Input() product: Product;

   constructor(
    private productservice: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit():void{
      this.route.paramMap
      .switchMap((params:ParamMap)=>this.productservice.getProduct(+params.get('id')))
        .subscribe(product=>this.product=product);
    } 

    goBack(): void {
        this.location.back();
      }

}