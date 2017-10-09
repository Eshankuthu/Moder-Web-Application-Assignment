const express = require('express')
const app = express()

const loggerfile = function(req,res,next){
   req.requestTime=Date.now()
    next()
}

module.exports = loggerfile;
