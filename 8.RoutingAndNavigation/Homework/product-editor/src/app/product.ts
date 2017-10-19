type conditiontype ="new" | "used" | "discontinued";
export class Product{
  id:number;
  name:string;
  description:string;
  price:number;
  condition: conditiontype
  category:string;
}