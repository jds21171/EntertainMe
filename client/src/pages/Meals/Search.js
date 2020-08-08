import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import { List, MealListItem } from "../../components/List";
import { Input, SearchButton } from "../../components/Input";

class MealsSearch extends Component {

    // instatiate state for list of books retrieved from googlebooks api and bookSearch value
    state = {
        meals: [],
        mealSearch: ""
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
        API.searchMeals(this.state.mealSearch)
            .then(res => {
                this.setState({ meals: res.data.meals }, function () {
                    console.log(this.state.meals);
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
                                                name="mealSearch"
                                                value={this.state.mealSearch}
                                                onChange={this.handleInputChange}
                                                placeholder="Search for a Meal"
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
                            <List>
                                {this.state.meals.map(meal => {
                                    return (
                                        <MealListItem
                                            key={meal.idMeal}
                                            strMeal={meal.strMeal}
                                            strArea={meal.strArea}
                                            strCategory={meal.strCategory}
                                            strInstructions={meal.strInstructions}
                                            strMealThumb={meal.strMealThumb}
                                            strSource={meal.strSource}
                                            strYoutube={meal.strYoutube}
                                        />
                                    );
                                })}
                            </List>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

};

export default MealsSearch;