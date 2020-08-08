const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealSchema = new Schema({

    strMeal: String,
    strArea: String,
    strCategory: String,
    strInstructions: String,
    strMealThumb: String,
    strSource: String,
    strYoutube: String
});

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;