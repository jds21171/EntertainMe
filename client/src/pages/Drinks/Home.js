import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col, DrinkH2 } from "../../components/Grid";
import { List, RandomDrinkListItem } from "../../components/List";

class DrinksHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedRandomDrinks: []
        };
    }

    componentDidMount() {
        this.loadRandomDrinks();
    };


    loadRandomDrinks = event => {
        API.getRandomDrinks()
            .then(res => {
                this.setState({ savedRandomDrinks: res.data.drinks }, function () {
                    console.log(this.state.savedRandomDrinks);
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Container>
                    <Row fluid>
                        <Col size="xs-12">
                            <DrinkH2 />
                            <List>
                                {this.state.savedRandomDrinks.map(randomDrink => {
                                    return (
                                        <RandomDrinkListItem
                                            key={randomDrink.idDrink}
                                            strIngredient1={[randomDrink.strIngredient1].toString()}
                                            strIngredient2={[randomDrink.strIngredient2].toString()}
                                            strIngredient3={[randomDrink.strIngredient3].toString()}
                                            strIngredient4={[randomDrink.strIngredient4].toString()}
                                            strIngredient5={[randomDrink.strIngredient5].toString()}
                                            strIngredient6={[randomDrink.strIngredient6].toString()}
                                            strMeasure1={[randomDrink.strMeasure1].toString()}
                                            strMeasure2={[randomDrink.strMeasure2].toString()}
                                            strMeasure3={[randomDrink.strMeasure3].toString()}
                                            strMeasure4={[randomDrink.strMeasure4].toString()}
                                            strMeasure5={[randomDrink.strMeasure5].toString()}
                                            strMeasure6={[randomDrink.strMeasure6].toString()}
                                            strDrinkThumb={randomDrink.strDrinkThumb}
                                            strInstructions={randomDrink.strInstructions}
                                            strDrink={randomDrink.strDrink}
                                            link={[`https://www.youtube.com/search?q=how+to+make+a+${randomDrink.strDrink.trim().replace(/\s+/g, "+")}+drink`]}
                                            id={randomDrink.idDrink}
                                            loadRandomDrinks={this.loadRandomDrinks}
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

export default DrinksHome;