//3**********************************************************
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//Parameter decorator
function logPosition(target, PropertyKey, parameterIndex) {
    console.log(parameterIndex);
}
var Cow = /** @class */ (function () {
    function Cow() {
    }
    Cow.prototype.say = function (b, c) {
        console.log(b);
    };
    __decorate([
        __param(1, logPosition)
    ], Cow.prototype, "say");
    return Cow;
}());
new Cow().say('hello', false);
// 2********************************************************
//Property Decorators
//EXAMPLE 1
// function Averride(label: string){
//     return function(target: any, key: string){
//         Object.defineProperty(target, key,{
//             configurable:false,
//             get:()=>label
//         });
//     }
// }
// class Test{
//     @Averride('test')
//     name: string ='pat';
// }
// let t = new Test();
// console.log(t.name);
//EXAMPLE2
// function ReadOnly(target:any, key: string){
//     Object.defineProperty(target, key,
//     {
//         writable:false
//     });
// }
// class Test{
//     @ReadOnly
//     name: string;
// }
// const t = new Test();
// t.name = 'jan';
// console.log(t.name);
// 1*******************************************************************
// Basic Decorator
// const course = {name : 'CS572'};
// function addLevel(level: string){
//     return function(course){
//         return{
//             level: level,
//             name: course.name
//         }
//     }
// }
// const decoratedCourse = addLevel('500')(course);
// console.log(decoratedCourse); 
