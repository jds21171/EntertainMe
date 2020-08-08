const db = require("../models");
const axios = require("axios");

module.exports = {

    // function to use API from backend
    searchApi: (req, res) => {

        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
            .then((response) => res.json(response.data))
            .catch(err => res.status(422).json(err))

    },

    // find all Drinks saved in db
    findAll: (req, res) => {
        db.Drink
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: (req, res) => {
        db.Drink
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    // used to save a Drink to the db
    save: (req, res) => {
        db.Drink
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update: (req, res) => {
        db.Drink
            .findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    // used to delete a Drink from the db
    remove: (req, res) => {
        db.Drink
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

};

