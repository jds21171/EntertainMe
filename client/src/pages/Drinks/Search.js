import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import { DrinkList, DrinkListItem } from "../../components/List";
import { Input, SearchButton } from "../../components/Input";

class DrinksSearch extends Component {

    // instatiate state for list of books retrieved from googlebooks api and bookSearch value
    state = {
        drinks: [],
        drinkSearch: ""
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
        API.searchDrinks(this.state.drinkSearch)
            .then(res => {
                this.setState({ drinks: res.data.drinks }, function () {
                    console.log(this.state.drinks);
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
                                                name="drinkSearch"
                                                value={this.state.drinkSearch}
                                                onChange={this.handleInputChange}
                                                placeholder="Search for a Drink"
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
                    <Row fluid>
                        <Col size="xs-12">
                            <DrinkList>
                                {this.state.drinks.map(drink => {
                                    return (
                                        <DrinkListItem
                                        key={drink.idDrink}
                                        strIngredient1={[drink.strIngredient1].toString()}
                                        strIngredient2={[drink.strIngredient2].toString()}
                                        strIngredient3={[drink.strIngredient3].toString()}
                                        strIngredient4={[drink.strIngredient4].toString()}
                                        strIngredient5={[drink.strIngredient5].toString()}
                                        strIngredient6={[drink.strIngredient6].toString()}
                                        strMeasure1={[drink.strMeasure1].toString()}
                                        strMeasure2={[drink.strMeasure2].toString()}
                                        strMeasure3={[drink.strMeasure3].toString()}
                                        strMeasure4={[drink.strMeasure4].toString()}
                                        strMeasure5={[drink.strMeasure5].toString()}
                                        strMeasure6={[drink.strMeasure6].toString()}
                                        strDrinkThumb={drink.strDrinkThumb}
                                        strInstructions={drink.strInstructions}
                                        strDrink={drink.strDrink}
                                        link={`https://www.youtube.com/search?q=how+to+make+a+${drink.strDrink.trim().replace(/\s+/g, "+")}+drink`}
                                        />
                                    );
                                })}
                            </DrinkList>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

};

export default DrinksSearch;