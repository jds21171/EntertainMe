const db = require("../models");
const axios = require("axios");

// "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes"

module.exports = {

    // function to use API from backend
    searchApi: (req, res) => {

        axios.get("https://api.themoviedb.org/3/search/movie?api_key=d01285d04c8d02b5a1717fe84625e2e8&language=en-US&page=1&include_adult=true&query=")
            .then((response) => res.json(response.data.results))
            .catch(err => res.status(422).json(err))

    },

    // find all books saved in db
    findAll: (req, res) => {
        db.Movie
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: (req, res) => {
        db.Movie
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    // used to save a movie to the db
    save: (req, res) => {
        db.Movie
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update: (req, res) => {
        db.Movie
            .findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    // used to delete a movie from the db
    remove: (req, res) => {
        db.Movie
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
};