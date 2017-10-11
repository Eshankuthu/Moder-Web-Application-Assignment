//15********************************************************************
//Abstract Classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 0;
    }
    Project.prototype.calcTwoPercentTax = function () {
        return this.budget * 2 / 100;
    };
    return Project;
}());
var FinalProject = /** @class */ (function (_super) {
    __extends(FinalProject, _super);
    function FinalProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinalProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    FinalProject.prototype.hello = function () {
        console.log(this.projectName);
    };
    return FinalProject;
}(Project));
var play = new FinalProject();
play.changeName("CS574 Project");
play.hello();
//14***********************************************************************
// Static Propertis & Methods
// class Helpers{
//     static PI: number = 3.14;
//     static calcCircumference(diameter:number): number{
//             return this.PI*diameter;
//     }
// }
// console.log(2*Helpers.PI);
// console.log(Helpers.calcCircumference(8));
//13**********************************************************************
//Getters and Setters
// class Plant{
//         private _species: string = "Default";
//         get species(){
//              return this._species;
//         }
//         set species(value: string){
//             if(value.length>3){
//                 this._species = value;
//             }else{
//                 this._species="Default";
//             }
//         }
// }
// let play = new Plant();
// console.log(play.species);
// play.species = "Green Plants";
// console.log(play.species);
//12*****************************************************
//CLASS Example
// interface Book{
//     bookName: string;
//     isbn: number;
// }
// class Course{
//     name:string;
//     code:number;
//     constructor(name: string, code:number){
//         this.name = name;
//         this.code = code;
//     }
//     addBook(book: Book){
//         console.log(`Course ${this.name} is using the textbook:
//                       ${book.bookName}  who's ISBN = ${book.isbn} `);
//     }
// }
//   var play = new Course('Harry',100);
//11******************************************************
//Interfaces
// interface Callback{
//     (error: Error, data: any): void;
// }
// function callServer(callback: Callback){
//     callback(null,'hi');
// }
// callServer((error,data)=>console.log(data));
// 10******************************************
//Implementing interface
//    interface ClockInterface{
//        currentTime: Date;
//        setTime(d: String);
//    }
//    class Clock implements ClockInterface{
//        currentTime: Date;
//        setTime(d: String){
//            console.log("hello" + d);
//        }
//        constructor(h:number, m:number){}
//    }
//    var h = new Clock(12,45);
//     h.setTime('eshan');
//9*****************************************************
//Intersection Types
// interface Kicker{
//     kick(speed: number): number;      
// }
// interface Puncher{
//     punch(power: number):  number;
// }
// type KickPuncher = Kicker & Puncher;
// function attack(warrior: KickPuncher){
//    console.log(warrior.kick(102));
//     warrior.punch(412);
// }
// 8*************************************************************
//Union Types and Type Aliases
//     function admintAge(age: number|string): string {
//         return `I am ${age}, alright ? !`;
//     }
//     admintAge(30);
//    console.log(admintAge('forty'));
//2nexample
// type Age = number|string|boolean;
// function admitAge(age:Age): string{
//     return `I am ${age}, alright`;
// }
// let myAge:boolean= true;
// console.log(admitAge(myAge));
//7*******************************************************
//Optional Parameters
// function logMessage(message:string, isDefug?:boolean){
//     if(isDefug){
//         console.log('Debug'+message);
//     }else{
//         console.log(message);
//     }
// }
// logMessage('hi');
// logMessage('test',true);
//6******************************************************************
//Function Type
//  type MaybeError = Error | null;
//  type Callback = (err: MaybeError, response: Object)=>void;
//  function sendRequest(cb: Callback): void{
//      if(cb){
//          cb(null,{});
//      }
//  }
// 5*********************************************************
//Type Assertion
// let message;
// message = 'abc';
// let msg = (<string>message).substr(1);
// let msg2 = (message as string).substr(2);
// console.log(msg2);
// 4********************************************************
//Type Inferencing
// let userId =(a: string, b:number) : string =>a+b;
// let userId =(a: string, b:number) : number =>a+b; //error
// 3***************************************************
// Primitive Example
// function showMessage(data : string): void{
//     alert(data);
// }
// showMessage('hello');
//2********************************************** /
// function add(a : number, b : number){
//     return a+b;
// }
// add(1,3);
// add(1,'3'); //comiple error
//1************************************* */
// function log(message){
//     console.log(message);
// }
// var msg ="Hello";
// log(msg); 
