function palindrom(n,callback){

    setImmediate(()=>{
        if(n.length<2){
            callback("It is Palindrom");
            
        }

           else if(n[0]==n[n.length-1]){
                return palindrom(n.slice(1,n.length-1),callback);
            }else{
            callback("It is not Palindrom");}
        
    });
}

palindrom('ab1cba', a=>console.log(a));