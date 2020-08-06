import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav"
// Home page for application
import Home from "./pages/Home";
// Books pages for application
import BooksSearch from "./pages/Books/Search";
import BooksSaved from "./pages/Books/Saved";
import BooksHome from "./pages/Books/Home";
// Movies pages for application
import MoviesSearch from "./pages/Movies/Search";
import MoviesSaved from "./pages/Movies/Saved";
import MoviesHome from "./pages/Movies/Home";
// Music pages for application
import MusicSearch from "./pages/Music/Search";
import MusicSaved from "./pages/Music/Saved";
import MusicHome from "./pages/Music/Home";

import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Jumbotron />
          <Switch>
            {/* renders the Home page when "/" route is hit */}
            <Route exact path="/" component={Home} />

            {/* renders the Books Home page when "/books" route is hit */}
            <Route exact path="/books" component={BooksHome} />
            {/* renders the Books Search page when "/books/search" route is hit */}
            <Route exact path="/books/search" component={BooksSearch} />
            {/* renders the Books Saved page when "/books/saved" route is hit */}
            <Route exact path="/books/saved" component={BooksSaved} />

            {/* renders the Movies Home page when "/movies" route is hit */}
            <Route exact path="/movies" component={MoviesHome} />
            {/* renders the Movies Search page when "/movies/search" route is hit */}
            <Route exact path="/movies/search" component={MoviesSearch} />
            {/* renders the Movies Saved page when "/movies/saved" route is hit */}
            <Route exact path="/movies/saved" component={MoviesSaved} />

            {/* renders the Home Search page when "/music" route is hit */}
            <Route exact path="/music" component={MusicHome} />
            {/* renders the Home Search page when "/music/search" route is hit */}
            <Route exact path="/music/search" component={MusicSearch} />
            {/* renders the Home Saved page when "/music/saved" route is hit */}
            <Route exact path="/music/saved" component={MusicSaved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
