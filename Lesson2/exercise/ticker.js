const EventEmitter = require("events");

class Ticker extends EventEmitter{
  
   start(){
    setInterval(function(){ tickk.emit('tick'); }, 1000);
   }
  
}

const tickk = new Ticker();

tickk.on('tick',()=>{
    console.log('TICK');
}
);

tickk.start();

