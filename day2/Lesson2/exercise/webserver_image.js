const fs = require('fs');



const server = require('http').createServer();

server.on('request',(req,res)=>{
    fs.readFile('1.JPG',(err,data)=>{
        if(err) throw err;
        res.end(data);
    });
    
});

// server.on("request",(req,res)=>{
//     const src= fs.createReadStream('1.JPG');
//     src.pipe(res);
// });

server.listen(8080);