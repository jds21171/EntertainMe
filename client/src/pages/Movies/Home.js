import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col, MovieH2 } from "../../components/Grid";
import { MovieList, TrendingMovieListItem } from "../../components/List";

class MoviesHome extends Component {

    state = {
        savedTrandingMovies: []
    };

    componentDidMount() {
        this.loadTrendingMovies();
    };


    loadTrendingMovies = event => {
        API.getTrandingMovies()
            .then(res => {
                this.setState({ savedTrandingMovies: res.data.results }, function () {
                    console.log(this.state.savedTrandingMovies);
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="xs-12">
                            <MovieH2 />
                            <MovieList>
                                {this.state.savedTrandingMovies.map(movie => {
                                    return (
                                        <TrendingMovieListItem
                                            key={movie.id}
                                            title={movie.title}
                                            releaseDate={movie.release_date}
                                            description={movie.overview}
                                            image={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                                            link={`https://www.google.com/search?q=` + movie.title.trim().replace(/\s+/g, "")}
                                            id={movie.id}
                                            loadTrendingMovies={this.loadTrendingMovies}
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

export default MoviesHome;