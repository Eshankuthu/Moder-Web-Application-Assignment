var express= require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db= mongojs('mongodb://eshan:eshan@ds125113.mlab.com:25113/mytasklist',['task']);

//Get ALL Tasks
router.get('/tasks',function(req,res,next){
    db.task.find(function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);
    })
});

//GET SINGLE TASK
router.get('/tasks/:id',function(req,res,next){
    db.task.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);
    })
});

//Save Task
router.post('/task',function(req,res,next){
    var task=req.body;
    if(!task.title||(task.isDone+'')){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });

    }else{
        db.tasks.save(task,function(err,task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

//DELETE
router.delete('/tasks/:id',function(req,res,next){
    db.task.remove({_id:mongojs.ObjectId(req.params.id)},function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);
    })
});

//UPDATE
router.put('/tasks/:id',function(req,res,next){

    var task = req.body;
    var updTask={};
    if(task.isDone){
        updTask.isDone=task.isDonel
    }
    if(task.title){
        updTask.title=task.title;
    }
    if(!updTask){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }else{
        db.task.update({_id:mongojs.ObjectId(req.params.id)},updTask,{},function(err,task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
    
});
module.exports=router;