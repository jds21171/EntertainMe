import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import SaveBtn from "../SaveBtn";
import API from "../../utils/API";
import DeleteBtn from "../DeleteBtn"
import "./style.css"

// BookList renders a bootstrap list item
export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
};
export function NYTBookList({ children }) {
    return <ul className="list-group">{children}</ul>;
};
export function MovieList({ children }) {
    return <ul className="list-group">{children}</ul>;
};

export function TrendingMovieListItem(props) {
    API.getTrendingMovies({
        title: props.title,
        release_date: props.release_date,
        overview: props.overview,
        image: `https://image.tmdb.org/t/p/w500${props.poster_path}`,
        link: `https://www.google.com/search?q=${props.title.trim().replace(/\s+/g, "")}`

    })
        .then(
            res => console.log(res)
        )
        .catch(
            err => console.log(err)
        )

    return (
        <li className="list-group-item" key={props.id}>
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={props.image} />
                    </Col>
                    <Col size="xs-8 sm-10">
                        <h3>{props.title}</h3>
                        <p>
                            Released on {props.releaseDate}
                        </p>
                        <p>
                            {props.overview}
                        </p>
                        <a
                            rel="noreferrer noopener"
                            className="btn btn-lg btn-primary input-lg view"
                            target="_blank"
                            href={props.link}
                        >
                            View
                        </a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
};

export function NYTBookListItem(props) {
    API.getNYTBooks({
        title: props.title,
        author: props.author,
        description: props.description,
        image: props.image,
        link: props.link
    })
        .then(
            res => console.log(res)
        )
        .catch(
            err => console.log(err)
        )

    return (
        <li className="list-group-item" key={props.id}>
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={props.image} />
                    </Col>
                    <Col size="xs-8 sm-10">
                        <h3>{props.title}</h3>
                        <p>
                            Written By {[props.author].flat().join(", ")}
                        </p>
                        <p>
                            {props.description}
                        </p>
                        <a
                            rel="noreferrer noopener"
                            className="btn btn-lg btn-primary input-lg view"
                            target="_blank"
                            href={props.link}
                        >
                            View
                        </a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
};

// component to render each book
export function BookListItem(props) {

    // function to handle saving book to db when save button is clicked
    var handleSaveBtn = event => {

        API.saveBook({
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
        }).then(
            res => console.log(res)
        )
            .catch(
                err => console.log(err)
            )
    };

    // function to handle deleting book from db when delete button is clicked
    const handleDeleteBtn = event => {
        API.deleteBook(props.id)
            .then(
                res => {
                    // use loadBooks prop from Saved page component
                    props.loadBooks()
                    console.log(props.id)
                }
            )
            .catch(err => console.log(err))
    };

    return (
        <li className="list-group-item" key={[props.id].toString()}>
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={props.image} />
                    </Col>
                    <Col size="xs-8 sm-10">
                        <h3>{props.title}</h3>
                        <p>
                            Written By {[props.authors].flat().join(", ")}
                        </p>
                        <p>
                            {props.description}
                        </p>
                        <a
                            rel="noreferrer noopener"
                            className="btn btn-lg btn-primary input-lg view"
                            target="_blank"
                            href={props.link}
                        >
                            View
                        </a>
                        {/* if there is an object id render the SaveBtn component else render the DeleteBtn component */}
                        {!props.id ?
                            <SaveBtn
                                type="success"
                                className="input-lg"
                                onClick={handleSaveBtn}
                            >
                                Save
                            </SaveBtn>
                            :
                            <DeleteBtn
                                type="danger"
                                className="input-lg"
                                onClick={handleDeleteBtn}
                            >
                                Delete
                            </DeleteBtn>
                        }
                    </Col>
                </Row>
            </Container>
        </li>
    );
};
export function MovieListItem(props) {

    // function to handle saving book to db when save button is clicked
    var handleSaveBtn = event => {

        API.saveMovie({
            title: props.title,
            release_date: props.release_date,
            overview: props.overview,
            // image: `https://image.tmdb.org/t/p/w500${props.poster_path}`,
            link: `https://www.google.com/search?q=${props.title.trim().replace(/\s+/g, "")}`

        })
            .then(
                res => console.log(res)
            )
            .catch(
                err => console.log(err)
            )
    };

        // function to handle deleting book from db when delete button is clicked
        const handleDeleteBtn = event => {
            API.deleteMovie(props.id)
                .then(
                    res => {
                        // use loadBooks prop from Saved page component
                        props.loadMovies()
                        console.log(props.id)
                    }
                )
                .catch(err => console.log(err))
        };
        return (
            <li className="list-group-item" key={props.id}>
                <Container>
                    <Row>
                        <Col size="xs-4 sm-2">
                            <Thumbnail src={props.image} />
                        </Col>
                        <Col size="xs-8 sm-10">
                            <h3>{props.title}</h3>
                            <p>
                                Released on {props.release_date}
                            </p>
                            <p>
                                {props.overview}
                            </p>
                            <a
                                rel="noreferrer noopener"
                                className="btn btn-lg btn-primary input-lg view"
                                target="_blank"
                                href={props.link}
                            >
                                View
                            </a>
                            {/* if there is an object id render the SaveBtn component else render the DeleteBtn component */}
                            {!props.id ?
                                <SaveBtn
                                    type="success"
                                    className="input-lg"
                                    onClick={handleSaveBtn}
                                >
                                    Save
                            </SaveBtn>
                                :
                                <DeleteBtn
                                    type="danger"
                                    className="input-lg"
                                    onClick={handleDeleteBtn}
                                >
                                    Delete
                            </DeleteBtn>
                            }
                        </Col>
                    </Row>
                </Container>
            </li>
        );
};