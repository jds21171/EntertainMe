import axios from "axios";
// endpoint from googlebooks api
const googleUrl = "https://www.googleapis.com/books/v1/volumes?q="
// NYT Best Seller List api
const nytUrl = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=7WDjwyOnojA4nXGdi44iJ8Ok74hFYYLy"
// Movie daily trending top 10 api
const trendingMovieUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=d01285d04c8d02b5a1717fe84625e2e8"
// Movie query
const movieUrl = "https://api.themoviedb.org/3/search/movie?api_key=d01285d04c8d02b5a1717fe84625e2e8&language=en-US&page=1&include_adult=true&query="


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
    getTrandingMovies: () => axios.get(trendingMovieUrl),

    // calls googlbooks api and retrieve books based on user input
    searchMovies: (query) => axios.get(movieUrl + query),
    // get all movies saved in db
    getMovies: () => axios.get("/api/movies"),
    // saves a book to the db
    saveMovie: (movieData) => axios.post("/api/movies", movieData),
    // deletes a book with the given id
    deleteMovie: (id) => axios.delete("/api/movies/" + id),
};