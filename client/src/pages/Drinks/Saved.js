import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import { List, DrinkListItem } from "../../components/List";

class DrinksSaved extends Component {

    // instantiate state for saved books
    state = {
        savedDrinks: [],
    };

    // loads saved books when Saved page loads
    componentDidMount() {
        this.loadDrinks();
    };

    loadDrinks = event => {

        API.getDrinks()
            .then(res => {
                this.setState({ savedDrinks: res.data }, function () {
                    console.log(this.state.savedDrinks);
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
                                {this.state.savedDrinks.map(drink => {
                                    return (
                                        <DrinkListItem
                                            key={drink._id}
                                            strIngredient1={drink.strIngredient1}
                                            strIngredient2={drink.strIngredient2}
                                            strIngredient3={drink.strIngredient3}
                                            strIngredient4={drink.strIngredient4}
                                            strIngredient5={drink.strIngredient5}
                                            strIngredient6={drink.strIngredient6}
                                            strMeasure1={drink.strMeasure1}
                                            strMeasure2={drink.strMeasure2}
                                            strMeasure3={drink.strMeasure3}
                                            strMeasure4={drink.strMeasure4}
                                            strMeasure5={drink.strMeasure5}
                                            strMeasure6={drink.strMeasure6}
                                            strDrinkThumb={drink.strDrinkThumb}
                                            strInstructions={drink.strInstructions}
                                            strDrink={drink.strDrink}
                                            link={drink.link}
                                            id={drink._id}
                                            loadDrinks={this.loadDrinks}
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

};

export default DrinksSaved;