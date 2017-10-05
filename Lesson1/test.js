//**************Blocking


// const addSync = (a,b) => {
//   for(let i=0;i<9e7;i++){
//     console.log(a+b);
//   }
// }
//
// console.log('start');
// const A = addSync(1,2);
// const B = addSync(2,3);
// const C = addSync(3,4);
// console.log('end');


//********************Thread Starvation

// function fib(n){
//   if(n<2)
//     return n;
//   else
//     return fib(n-1)+fib(n-2);
// }
//
// setTimeout(()=>console.log('timeout'),0);
//
// console.log("waiting for process");
// console.log(fib(40));


//******************with SetTimmediate

// function fib(n, callback){
//     if(n<2)
//       return callback(n);
//     else
//     process.nextTick(()=>{
//          fib(n-1,(sum1)=>{
//             fib(n-2,(sum2)=>{
//                 callback(sum1+sum2);
//             })
//          })
//       })
// }
//
// setTimeout(()=>console.log('timeout'),0);
//
// console.log("Wait for long process");
//
// // fib(30,(result)=>{
// // console.log(result);})
//
// fib(50,(result)=>{
// console.log(result);})


//****************************************


function slow(){
  for(let i=0; i<=5e8; i++)

  if(Math.random()>0.5){
      return "Error";
  }
  return {
      id : 12345
  };
}

console.log(slow());
