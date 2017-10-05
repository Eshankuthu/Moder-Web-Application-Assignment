function slow(callback){
    setTimeout(function(){
        if(Math.random()>0.5){
            callback ("Error");
        }
        callback( {id : 12345});
    },1000)
    
}

console.log("qq");
slow(a=>console.log(a));
console.log("hello");