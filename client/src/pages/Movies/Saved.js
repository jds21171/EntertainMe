import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import { List, MovieListItem } from "../../components/List";

class MoviesSaved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // instantiate state for saved books
            savedMovies: [],
        };
    }

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
                            <List>
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
                            </List>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
}

export default MoviesSaved;