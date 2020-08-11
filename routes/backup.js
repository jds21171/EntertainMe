// const express = require('express');
// const router = express.Router();
// const authenticate = require("../config/authenticate");
// const passport = require('passport');

// const booksController = require("../controllers/booksController");
// const moviesController = require("../controllers/moviesController");
// const songsController = require("../controllers/songsController");
// const mealsController = require("../controllers/mealsController");
// const drinksController = require("../controllers/drinksController");
// const usersController = require("../controllers/usersController");

// router.post("/create", usersController.save)

// router.post("/login",  passport.authenticate("local"), usersController.login)

// router.get("/", usersController.findAll)

// router.use(authenticate);
 
// router.get('/logout', function(req, res){
//     req.logout();
//     res.redirect('/');
//   });

// router.route("/users")
//     .get(usersController.findAll)
//     // .get(booksController.searchApi)
//     .post(usersController.save)

// router.route("/users/:id")
//     .get(usersController.findById)

// router.route("/books")
//     .get(booksController.findAll)
//     // .get(booksController.searchApi)
//     .post(booksController.save)

// router.route("/books/:id")
//     .get(booksController.findById)
//     .put(booksController.update)
//     .delete(booksController.remove)


// router.route("/movies")
//     .get(moviesController.findAll)
//     // .get(moviesController.searchApi)
//     .post(moviesController.save)

// router.route("/movies/:id")
//     .get(moviesController.findById)
//     .put(moviesController.update)
//     .delete(moviesController.remove)


// router.route("/songs")
//     .get(songsController.findAll)
//     // .get(moviesController.searchApi)
//     .post(songsController.save)

// router.route("/songs/:id")
//     .get(songsController.findById)
//     .put(songsController.update)
//     .delete(songsController.remove)


// router.route("/meals")
//     .get(mealsController.findAll)
//     // .get(moviesController.searchApi)
//     .post(mealsController.save)

// router.route("/meals/:id")
//     .get(mealsController.findById)
//     .put(mealsController.update)
//     .delete(mealsController.remove)


// router.route("/drinks")
//     .get(drinksController.findAll)
//     // .get(moviesController.searchApi)
//     .post(drinksController.save)

// router.route("/drinks/:id")
//     .get(drinksController.findById)
//     .put(drinksController.update)
//     .delete(drinksController.remove)

// module.exports = router;