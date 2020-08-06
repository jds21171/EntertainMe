import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import { MovieList, MovieListItem } from "../../components/List";
import { Input, SearchButton } from "../../components/Input";

class MoviesSearch extends Component {

    // instatiate state for list of books retrieved from googlebooks api and bookSearch value
    state = {
        movies: [],
        movieSearch: ""
    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({ [name]: value })
    };

    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get book update the books state
        event.preventDefault();

        // calls googlebooks api and returns searched book when search button is clicked
        API.searchMovies(this.state.movieSearch)
            .then(res => {
                this.setState({ movies: res.data.results }, function () {
                    console.log(this.state.movies);
                })
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <Container>
                                    <Row>
                                        <Col size="xs-12 sm-12">
                                            <Input
                                                name="movieSearch"
                                                value={this.state.movieSearch}
                                                onChange={this.handleInputChange}
                                                placeholder="Search for a Movie"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col size="xs-12 sm-12">
                                            <SearchButton
                                                onClick={this.handleFormSubmit}
                                                type="success"
                                                className="input-lg"
                                            >
                                                Search
                                            </SearchButton>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="xs-12">
                            <MovieList>
                                {this.state.movies.map(movie => {
                                    return (
                                        <MovieListItem
                                            key={[movie.id].toString()}
                                            title={movie.title}
                                            release_date={movie.release_date}
                                            overview={movie.overview}
                                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            link={`https://www.google.com/search?q=${movie.title.trim().replace(/\s+/g, "")}`}
                                            loadMovies={this.loadMovies}
                                        />
                                    )
                                })}
                            </MovieList>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

};

export default MoviesSearch;