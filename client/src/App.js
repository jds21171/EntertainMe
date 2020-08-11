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
// Meal pages for application
import MealsSearch from "./pages/Meals/Search";
import MealsSaved from "./pages/Meals/Saved";
import MealsHome from "./pages/Meals/Home";
// Drink pages for application
import DrinksSearch from "./pages/Drinks/Search";
import DrinksSaved from "./pages/Drinks/Saved";
import DrinksHome from "./pages/Drinks/Home";
import Jumbotron from "./components/Jumbotron";

// import api from './utils/API';
import Login from "./pages/Login";
import SignUp from './pages/Signup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      signedIn: true
    }
  }

  // componentDidMount = () => {
  //   this.getUsers();
  // }

  // getUsers = async () => {
  //   try {
  //     const response = await api.authenticate();
  //     if (response.status === 401) this.props.history.push("/login");
  //     else this.setState({ signedIn: true });
  //   } catch (err) {
  //     console.log(err);
  //     this.props.history.push("/login");
  //   }
  // }

  render() {
    return (
      <Router>
        <div>
          <Nav isSignedIn={this.state.signedIn} />
          <Jumbotron />
          <Switch>
            {/* renders the Home page when "/" route is hit */}
            <Route exact path="/" component={Home} />
            {/* renders the Login page when "/login" route is hit */}
            <Route exact path="/login" component={Login} />
            {/* renders the SignUp page when "/signup" route is hit */}
            <Route exact path="/signup" component={SignUp} />

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

            {/* renders the Home Search page when "/meal" route is hit */}
            <Route exact path="/meals" component={MealsHome} />
            {/* renders the Home Search page when "/meal/search" route is hit */}
            <Route exact path="/meals/search" component={MealsSearch} />
            {/* renders the Home Saved page when "/meal/saved" route is hit */}
            <Route exact path="/meals/saved" component={MealsSaved} />

            {/* renders the Home Search page when "/meal" route is hit */}
            <Route exact path="/drinks" component={DrinksHome} />
            {/* renders the Home Search page when "/meal/search" route is hit */}
            <Route exact path="/drinks/search" component={DrinksSearch} />
            {/* renders the Home Saved page when "/meal/saved" route is hit */}
            <Route exact path="/drinks/saved" component={DrinksSaved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
