const db = require("../models");
const axios = require("axios");

module.exports = {

    // function to use API from backend
    searchApi: (req, res) => {

        axios.get("http://api.napster.com/v2.2/search?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&type=track&per_type_limit=20&query=happy")
            .then((response) => res.json(response.data))
            .catch(err => res.status(422).json(err))

    },

    // find all Songs saved in db
    findAll: (req, res) => {
        db.Song
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: (req, res) => {
        db.Song
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    // used to save a Song to the db
    save: (req, res) => {
        db.Song
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update: (req, res) => {
        db.Song
            .findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    // used to delete a Song from the db
    remove: (req, res) => {
        db.Song
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

};
