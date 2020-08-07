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
                    <Row fluid>
                        <Col size="xs-12">
                            <MovieList>
                                {this.state.savedMovies.map(movie => {
                                    return (
                                        <MovieListItem
                                            key={movie._id}
                                            title={movie.title}
                                            release_date={movie.release_date}
                                            overview={movie.overview}
                                            image={movie.image}
                                            link={movie.link}
                                            id={movie._id}
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