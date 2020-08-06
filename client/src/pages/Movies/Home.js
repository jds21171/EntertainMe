import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col, MovieH2 } from "../../components/Grid";
import { MovieList, TrendingMovieListItem } from "../../components/List";

class MoviesHome extends Component {

    state = {
        savedTrendingMovies: []
    };

    componentDidMount() {
        this.loadTrendingMovies();
    };


    loadTrendingMovies = event => {
        API.getTrendingMovies()
            .then(res => {
                this.setState({ savedTrendingMovies: res.data.results }, function () {
                    console.log(this.state.savedTrendingMovies);
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
                                {this.state.savedTrendingMovies.map(movie => {
                                    return (
                                        <TrendingMovieListItem
                                            key={movie.id}
                                            title={movie.title}
                                            releaseDate={movie.release_date}
                                            overview={movie.overview}
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