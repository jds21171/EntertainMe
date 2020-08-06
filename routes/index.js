const express = require('express');
const router = express.Router();

const booksController = require("../controllers/booksController");
const moviesController = require("../controllers/moviesController");


router.route("/books")
    .get(booksController.findAll)
    // .get(booksController.searchApi)
    .post(booksController.save)

router.route("/books/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove)


router.route("/movies")
    .get(moviesController.findAll)
    // .get(moviesController.searchApi)
    .post(moviesController.save)

router.route("/movies/:id")
    .get(moviesController.findById)
    .put(moviesController.update)
    .delete(moviesController.remove)

module.exports = router;