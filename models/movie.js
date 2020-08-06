const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({

    title: { type: String, required: true },
    release_date: String,
    description: String,
    // image: String,
    link: String
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;