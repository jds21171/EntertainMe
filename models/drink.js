const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({

    strIngredient1: String,
    strIngredient2: String,
    strIngredient3: String,
    strIngredient4: String,
    strIngredient5: String,
    strMeasure1: String,
    strMeasure2: String,
    strMeasure3: String,
    strMeasure4: String,
    strMeasure5: String,
    strDrinkThumb: String,
    strInstructions: String,
    strDrink: String,
    link: String
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;