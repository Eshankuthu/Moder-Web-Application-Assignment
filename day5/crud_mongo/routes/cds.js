const express = require('express');
const router = express.Router();
const inMemoryCd = require('../models/in_memory_cds');

router.route('/')
    .get(function (req, res) {
        res.json(inMemoryCd);
    })
    .post(function (req, res) {
        const newCd = req.body;
        inMemoryCd.push(newCd);
        res.json(newCd);
    })

router.route('/:id')
    .put(function (req, res) {
        const updatedCd = req.body;
        const cdToReplace = inMemoryCd.find(cd => cd.id === req.params.id);
        inMemoryCd.splice(inMemoryCd.indexOf(cdToReplace)-1,1,updatedCd);
        res.sendStatus(200);
    })
    .delete(function(req,res){
        const cdToDelete = inMemoryCd.find(cd => cd.id === req.params.id);
        inMemoryCd.splice(inMemoryCd.indexOf(cdToDelete)-1,1);
        res.sendStatus(200);
    })
module.exports = router;