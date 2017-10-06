const url = require('url');
const fs = require('fs');
const server = require('http').createServer();
const path = require('path');
const {fork} = require('child_process');


server.on('request',(req, res)=>{
    //'http://localhost:5000/?url=image/read.txt'
    const myURL = url.parse(req.url,true) ;
    
    var filepath = myURL.query.url;
    if(filepath){
        const reader = fork('child-reader.js');
        reader.send(filepath);

        reader.on('message', msg => {
            res.end(msg);
        });
    }

}).listen(5000);