const express = require('express');
const router = express.Router();

const booksController = require("../controllers/booksController");
const moviesController = require("../controllers/moviesController");
const songsController = require("../controllers/songsController");
const mealsController = require("../controllers/mealsController");


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


router.route("/songs")
    .get(songsController.findAll)
    // .get(moviesController.searchApi)
    .post(songsController.save)

router.route("/songs/:id")
    .get(songsController.findById)
    .put(songsController.update)
    .delete(songsController.remove)


router.route("/meals")
    .get(mealsController.findAll)
    // .get(moviesController.searchApi)
    .post(mealsController.save)

router.route("/meals/:id")
    .get(mealsController.findById)
    .put(mealsController.update)
    .delete(mealsController.remove)

module.exports = router;