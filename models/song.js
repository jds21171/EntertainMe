const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({

    artistName: String,
    name: String,
    albumName: String,
    preview: String,
    image: String,
    link: String
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;