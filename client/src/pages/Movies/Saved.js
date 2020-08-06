import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import { MovieList, MovieListItem } from "../../components/List";

class MoviesSaved extends Component {

    // instantiate state for saved books
    state = {
        savedMovies: [],
    };

    // loads saved books when Saved page loads
    componentDidMount() {
        this.loadMovies();
    };

    loadMovies = event => {

        API.getMovies()
            .then(res => {
                this.setState({ savedMovies: res.data }, function () {
                    console.log(this.state.savedMovies);
                })
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="xs-12">
                            <MovieList>
                                {this.state.savedMovies.map(movie => {
                                    return (
                                        <MovieListItem
                                            key={[movie.id].toString()}
                                            title={movie.title}
                                            release_date={movie.release_date}
                                            overview={movie.overview}
                                            // image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            link={`https://www.google.com/search?q=${movie.title.trim().replace(/\s+/g, "")}`}
                                            id={[movie.id].toString()}
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
}

export default MoviesSaved;