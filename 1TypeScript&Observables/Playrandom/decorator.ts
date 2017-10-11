//3**********************************************************

        //Parameter decorator


function logPosition(target: any, PropertyKey: string, parameterIndex:number){
    console.log(parameterIndex);
}

class Cow{
    say(b:string, @logPosition c:boolean){
        console.log(b);
    }
}
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