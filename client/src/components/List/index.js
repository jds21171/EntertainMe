import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import SaveBtn from "../SaveBtn";
import API from "../../utils/API";
import DeleteBtn from "../DeleteBtn"
import "./style.css"

// BookList renders a bootstrap list item
export function List({ children }) {
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
            image: props.image,
            link: props.link

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
        <li className="list-group-item" key={[props.id].toString()}>
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


export function TrendingSongListItem(props) {
    API.getTrendingSongs({
        artistName: props.artistName,
        name: props.name,
        albumName: props.albumName,
        preview: props.preview,
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
                        <h3>Song: {props.name}</h3>
                        <p>
                            Artist: {props.artistName}
                        </p>
                        <p>
                            Album: {props.albumName}
                        </p>
                        <p>
                            {props.image}
                        </p>
                        <audio className="audio-element">
                            <source src={props.preview}></source>
                        </audio>
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

export function SongListItem(props) {

    // function to handle saving song to db when save button is clicked
    var handleSaveBtn = event => {

        API.saveSong({
            artistName: props.artistName,
            name: props.name,
            albumName: props.albumName,
            preview: props.preview,
            image: props.image,
            link: props.link

        })
            .then(
                res => console.log(res)
            )
            .catch(
                err => console.log(err)
            )
    };

    // function to handle deleting song from db when delete button is clicked
    const handleDeleteBtn = event => {
        API.deleteSong(props.id)
            .then(
                res => {
                    // use loadSongs prop from Saved page component
                    props.loadSongs()
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
                        <h3>Song: {props.name}</h3>
                        <p>
                            Artist: {props.artistName}
                        </p>
                        <p>
                            Album: {props.albumName}
                        </p>
                        <p>
                            {props.image}
                        </p>
                        <audio className="audio-element">
                            <source src={props.preview}></source>
                        </audio>
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

export function RandomMealListItem(props) {
    API.getRandomMeals({
        strMeal: props.strMeal,
        strArea: props.strArea,
        strCategory: props.strCategory,
        strInstructions: props.strInstructions,
        strMealThumb: props.strMealThumb,
        strYoutube: props.strYoutube,
        strSource: props.strSource

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
                        <Thumbnail src={props.strMealThumb} />
                    </Col>
                    <Col size="xs-8 sm-10">
                        <h3>Name: {props.strMeal}</h3>
                        <p>
                            Area: {props.strArea}
                        </p>
                        <p>
                            Category: {props.strCategory}
                        </p>
                        <p>
                            Instructions: {props.strInstructions}
                        </p>
                        <a
                            rel="noreferrer noopener"
                            className="btn btn-lg btn-primary input-lg view"
                            target="_blank"
                            href={props.strSource}
                        >
                            Ingredients
                        </a>
                        <a
                            rel="noreferrer noopener"
                            className="btn btn-lg btn-primary input-lg view"
                            target="_blank"
                            href={props.strYoutube}
                        >
                            Watch Along
                        </a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
};

export function MealListItem(props) {

    // function to handle saving song to db when save button is clicked
    var handleSaveBtn = event => {
        API.saveMeal({
            strMeal: props.strMeal,
            strArea: props.strArea,
            strCategory: props.strCategory,
            strInstructions: props.strInstructions,
            strMealThumb: props.strMealThumb,
            strSource: props.strSource,
            strYoutube: props.strYoutube

        })
            .then(
                res => console.log(res)
            )
            .catch(
                err => console.log(err)
            )
    };

    // function to handle deleting song from db when delete button is clicked
    const handleDeleteBtn = event => {
        API.deleteMeal(props.id)
            .then(
                res => {
                    // use loadSongs prop from Saved page component
                    props.loadMeals()
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
                        <Thumbnail src={props.strMealThumb} />
                    </Col>
                    <Col size="xs-8 sm-10">
                        <h3>Name: {props.strMeal}</h3>
                        <p>
                            Area: {props.strArea}
                        </p>
                        <p>
                            Category: {props.strCategory}
                        </p>
                        <p>
                            Instructions: {props.strInstructions}
                        </p>
                        <a
                            rel="noreferrer noopener"
                            className="btn btn-lg btn-primary input-lg view"
                            target="_blank"
                            href={props.strSource}
                        >
                            Ingredients
                        </a>
                        <a
                            rel="noreferrer noopener"
                            className="btn btn-lg btn-primary input-lg view"
                            target="_blank"
                            href={props.strYoutube}
                        >
                            Watch Along
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

export function RandomDrinkListItem(props) {
    API.getRandomDrinks({
        strIngredient1: props.strIngredient1,
        strIngredient2: props.strIngredient2,
        strIngredient3: props.strIngredient3,
        strIngredient4: props.strIngredient4,
        strIngredient5: props.strIngredient5,
        strMeasure1: props.strMeasure1,
        strMeasure2: props.strMeasure2,
        strMeasure3: props.strMeasure3,
        strMeasure4: props.strMeasure4,
        strMeasure5: props.strMeasure5,
        strDrinkThumb: props.strDrinkThumb,
        strInstructions: props.strInstructions,
        strDrink: props.strDrink,
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
                        <Thumbnail src={props.strDrinkThumb} />
                    </Col>
                    <Col size="xs-8 sm-10">
                        <h3>Name: {props.strDrink}</h3>
                        <p>
                            Step 1: {props.strMeasure1} - {props.strIngredient1}
                        </p>
                        <p>
                            Step 2: {props.strMeasure2} - {props.strIngredient2}
                        </p>
                        <p>
                            Step 3: {props.strMeasure3} - {props.strIngredient3}
                        </p>
                        <p>
                            Step 4: {props.strMeasure4} - {props.strIngredient4}
                        </p>
                        <p>
                            Step 5: {props.strMeasure5} - {props.strIngredient5}

                        </p>
                        <p>
                            Step 6: {props.strMeasure6} - {props.strIngredient6}

                        </p>
                        <p>
                            Instructions: {props.strInstructions}
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

export function DrinkListItem(props) {

    // function to handle saving song to db when save button is clicked
    var handleSaveBtn = event => {
        API.saveDrink({
            strIngredient1: props.strIngredient1,
            strIngredient2: props.strIngredient2,
            strIngredient3: props.strIngredient3,
            strIngredient4: props.strIngredient4,
            strIngredient5: props.strIngredient5,
            strMeasure1: props.strMeasure1,
            strMeasure2: props.strMeasure2,
            strMeasure3: props.strMeasure3,
            strMeasure4: props.strMeasure4,
            strMeasure5: props.strMeasure5,
            strDrinkThumb: props.strDrinkThumb,
            strInstructions: props.strInstructions,
            strDrink: props.strDrink,
            link: props.link

        })
            .then(
                res => console.log(res)
            )
            .catch(
                err => console.log(err)
            )
    };

    // function to handle deleting song from db when delete button is clicked
    const handleDeleteBtn = event => {
        API.deleteDrink(props.id)
            .then(
                res => {
                    // use loadSongs prop from Saved page component
                    props.loadDrinks()
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
                        <Thumbnail src={props.strDrinkThumb} />
                    </Col>
                    <Col size="xs-8 sm-10">
                        <h3>Name: {props.strDrink}</h3>
                        <p>
                            Step 1: {props.strMeasure1} - {props.strIngredient1}
                        </p>
                        <p>
                            Step 2: {props.strMeasure2} - {props.strIngredient2}
                        </p>
                        <p>
                            Step 3: {props.strMeasure3} - {props.strIngredient3}
                        </p>
                        <p>
                            Step 4: {props.strMeasure4} - {props.strIngredient4}
                        </p>
                        <p>
                            Step 5: {props.strMeasure5} - {props.strIngredient5}

                        </p>
                        <p>
                            Step 6: {props.strMeasure6} - {props.strIngredient6}

                        </p>
                        <p>
                            Instructions: {props.strInstructions}
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

export function EventListItem(props) {
    API.searchEvents({
        name: props.name,
        city: props.city,
        state: props.state,
        venue_address: props.venue_address,
        venue_name: props.venue_name,
        image: props.image,
        description: props.description,
        date: props.date,
        time: props.time,
        url: props.url

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
                        <h3>{props.name}</h3>
                        <p>
                            Location: {props.city}, {props.state}
                        </p>
                        <p>
                            Date: {props.date}, @ {props.time}
                        </p>
                        <p>
                            Description: {props.description}
                        </p>
                        <p>
                            Venue: {props.venue_name}
                        </p>
                        <p>
                            Venue Address: {props.venue_address}
                        </p>
                        <a
                            rel="noreferrer noopener"
                            className="btn btn-lg btn-primary input-lg view"
                            target="_blank"
                            href={props.url}
                        >
                            View
                        </a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
};