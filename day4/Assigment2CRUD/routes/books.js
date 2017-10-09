const express = require('express');
const router = express.Router();
const inMemoryBookBD = require('../models/in_memory_books');

router.route('/')
    .get(function (req, res) {
        res.json(inMemoryBookBD);
    })
    .post(function (req, res) {
        const newBook = req.body;
        inMemoryBookBD.push(newBook);
        res.json(newBook);
    })

router.route('/:id')
    .put(function (req, res) {
        const updatedBook = req.body;
        const bookToReplace = inMemoryBookBD.find(book => book.id === req.params.id);
        inMemoryBookBD.splice(inMemoryBookBD.indexOf(bookToReplace)-1,1,updatedBook);
        res.sendStatus(200);
    })
    .delete(function(req,res){
        const bookToDelete = inMemoryBookBD.find(book => book.id === req.params.id);
        inMemoryBookBD.splice(inMemoryBookBD.indexOf(bookToDelete),1);
        res.sendStatus(200);
    })
module.exports = router;