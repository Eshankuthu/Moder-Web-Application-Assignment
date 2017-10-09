var express = require('express');
var router = express.Router();


const books = [];

router.get('/',function(req,res){
  res.json(books);

});


router.post('/', function (req, res) {
    let book = {};
    book.id = books.length + 1;
    book.name = req.body.name;
    book.author = req.body.author;
    book.isbn = req.body.isbn;

    books.push(book);

    res.json(books);
});

router.delete('/:id', function (req, res) {
    
        for (let i = 0; i < books.length; i ++) {
            if (books[i].id === parseInt(req.params.id)) {
                books.splice(i, 1);
                break;
            }
        }
    
        res.json(books);
    
    });
    
    





module.exports = router;