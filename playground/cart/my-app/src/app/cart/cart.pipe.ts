import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:"calculation"
})
export class CalculationPrice implements PipeTransform{
    total:number=0;
    transform(price:number,quantity:number){
        
        this.total=price*quantity;
        return this.total;
    }
}