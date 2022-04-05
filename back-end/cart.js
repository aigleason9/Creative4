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

        books = await book.find({
            user: req.user
        }).sort({
            created: -1
        });

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


    const theBook = new book({
        user: req.user,
        book: req.body.book,
    });

    try {
        await theBook.save();
        return res.send({
            book: theBook
        });

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// remove a book from a cart
router.delete('/:id', validUser, async (req, res) => {

    try {
        await book.deleteOne({
            id: req.params.id
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
  