import { Injectable } from '@angular/core';
import {Product} from './product';
import {PRODUCTS} from './mock-product';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {
    // getProducts(): Promise<Product[]> {
    //     return Promise.resolve(PRODUCTS);
    //   }

    getProducts(): Observable<Product[]> {
        return Observable.create(observer => {
            observer.next(PRODUCTS);
            observer.complete(PRODUCTS);
        });
      }
}