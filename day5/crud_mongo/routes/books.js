const express = require('express');
const router = express.Router();
const inMemoryBookBD = require('../models/in_memory_books');

router.route('/')
    .get(function (req, res) {
        var start = new Date();
        req.db.books.find().toArray(function (err, objs) {
            if (err == null) {
                // res.send(new Date() - start + " ms");
                res.json(objs);
            }
            else
                res.send(err.message);
        });
    })
    .post(function (req, res) {
        const newBook = req.body;
        req.db.books.insert(newBook);
        //inMemoryBookBD.push(newBook);
        res.json(newBook);
    })

router.route('/:id')
    .put(function (req, res) {
        const updatedBook = req.body;

               req.db.books.update({"id":req.params.id}, updatedBook,function(err, result) {
                if (!err) console.log('Book updated!');
            });
                console.log(req.params.id);
                console.log(updatedBook);
                res.sendStatus(200);
    })
    .delete(function (req, res) {
        const bookToDelete = inMemoryBookBD.find(book => book.id === req.params.id);
        inMemoryBookBD.splice(inMemoryBookBD.indexOf(bookToDelete) - 1, 1);
        res.sendStatus(200);
    })
module.exports = router;