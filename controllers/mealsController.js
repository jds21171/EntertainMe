const db = require("../models");
const axios = require("axios");

module.exports = {

    // function to use API from backend
    searchApi: (req, res) => {

        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=lasagna")
            .then((response) => res.json(response.data))
            .catch(err => res.status(422).json(err))

    },

    // find all Meals saved in db
    findAll: (req, res) => {
        db.Meal
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: (req, res) => {
        db.Meal
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    // used to save a Meal to the db
    save: (req, res) => {
        db.Meal
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update: (req, res) => {
        db.Meal
            .findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    // used to delete a Meal from the db
    remove: (req, res) => {
        db.Meal
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

};

