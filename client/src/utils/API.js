import axios from "axios";
// endpoint from googlebooks api
const googleUrl = "https://www.googleapis.com/books/v1/volumes?q="
// NYT Best Seller List api
const nytUrl = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=7WDjwyOnojA4nXGdi44iJ8Ok74hFYYLy"

// Movie daily trending top 10 api
const trendingMovieUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=d01285d04c8d02b5a1717fe84625e2e8"
// Movie query
const movieUrl = "https://api.themoviedb.org/3/search/movie?api_key=d01285d04c8d02b5a1717fe84625e2e8&language=en-US&page=1&include_adult=false&query="

// event api
// const eventUrl = "http://api.amp.active.com/search?near=Atlanta,GA,US&api_key=q5h5p4f6bgfchqm56xrzmud9"
// // api key = q5h5p4f6bgfchqm56xrzmud9
// // api key = 9nz8byta68mb2nphh2xaanpb

const trendingSongUrl = "https://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4"
// song query url
const songUrl = "https://api.napster.com/v2.2/search?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&type=track&per_type_limit=20&query="

// random meal query url
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
// meal query url
const mealUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

// random drink url
const randomDrinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
// drink query url
const drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

export default {
    // calls googlbooks api and retrieve books based on user input
    searchBooks: (query) => axios.get(googleUrl + query),
    // get all books saved in db
    getBooks: () => axios.get("/api/books"),
    // saves a book to the db
    saveBook: (bookData) => axios.post("/api/books", bookData),
    // deletes a book with the given id
    deleteBook: (id) => axios.delete("/api/books/" + id),

    // NYT api call here for top 15 Best Sellers
    getNYTBooks: () => axios.get(nytUrl),

    // Movie api call here for daily trending
    getTrendingMovies: () => axios.get(trendingMovieUrl),

    // calls googlbooks api and retrieve books based on user input
    searchMovies: (query) => axios.get(movieUrl + query),
    // get all movies saved in db
    getMovies: () => axios.get("/api/movies"),
    // saves a book to the db
    saveMovie: (movieData) => axios.post("/api/movies", movieData),
    // deletes a book with the given id
    deleteMovie: (id) => axios.delete("/api/movies/" + id),

    // gets trending songs
    getTrendingSongs: () => axios.get(trendingSongUrl),
    // searches movies via napster api
    searchSongs: (query) => axios.get(songUrl + query),
    // get all movies saved in db
    getSongs: () => axios.get("/api/songs"),
    // saves a book to the db
    saveSong: (songData) => axios.post("/api/songs", songData),
    // deletes a book with the given id
    deleteSong: (id) => axios.delete("/api/songs/" + id),

    // gets random meals
    getRandomMeals: () => axios.get(randomMealUrl),
    // searches meals via themealdb api
    searchMeals: (query) => axios.get(mealUrl + query),
    // get all meals saved in db
    getMeals: () => axios.get("/api/meals"),
    // saves a meal to the db
    saveMeal: (mealData) => axios.post("/api/meals", mealData),
    // deletes a meal with the given id
    deleteMeal: (id) => axios.delete("/api/meals/" + id),

    // gets random drinks
    getRandomDrinks: () => axios.get(randomDrinkUrl),
    // searches drinks via thecoctaildb api
    searchDrinks: (query) => axios.get(drinkUrl + query),
    // get all drinks saved in db
    getDrinks: () => axios.get("/api/drinks"),
    // saves a drink to the db
    saveDrink: (drinkData) => axios.post("/api/drinks", drinkData),
    // deletes a drink with the given id
    deleteDrink: (id) => axios.delete("/api/drinks/" + id),

};