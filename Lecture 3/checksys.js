const os = require('os');

function checkSystem(){
    return new Promise(function(resolve,reject){
        if(os.cpus().length > 2){
            reject('Processor is not supported');
        }
        else if(os.totalmem < 2e9){
            reject("This app needs at least 2GB of RAM");
        }
        else{
            resolve("System is checked successfully");
        }  
    });
}
checkSystem().then(data => console.log(data)).catch(err=>console.log(err));

console.log("Checking your system...");