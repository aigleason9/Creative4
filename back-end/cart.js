const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const users = require("./users.js");

//
// Books
//

const User = users.model;
const validUser = users.valid;

// This is the schema for a book 
const bookSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },

    book :{
        title: String,
        price: String,
        author: String,
        genre: String,
        image: String,
        id: Number
    },
});

// The model for a book
const book = mongoose.model('Book', bookSchema);

// get books -- will list books that a user has added to their cart
router.get('/', validUser, async (req, res) => {

    let books = [];
    try {
        if (req.user.role === "admin") {
            books = await Book.find().sort({
                created: -1
            });

        } else {
            books = await Book.find({
                user: req.user
            }).sort({
                created: -1
            });
        }

        return res.send({
            books: books
        });

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// add to a cart
router.post('/', validUser, async (req, res) => {

    const book = new Book({
        user: req.user,
        book: req.body.book,
    });

    try {
        await book.save();
        return res.send({
            book: book
        });

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// remove a book from a cart
router.put('/:id', validUser, async (req, res) => {


    if (!req.body.status || !req.body.response) {
        return res.status(400).send({
            message: "status and response are required"
        });
    }

    try {
        await Book.deleteOne({
            _id: req.params.id
        });

        res.sendStatus(200);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

module.exports = {
    routes: router
}
  