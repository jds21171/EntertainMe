import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col, MealH2 } from "../../components/Grid";
import { MealList, RandomMealListItem } from "../../components/List";

class MealsHome extends Component {

    state = {
        savedRandomMeals: []
    };

    componentDidMount() {
        this.loadRandomMeals();
    };


    loadRandomMeals = event => {
        API.getRandomMeals()
            .then(res => {
                this.setState({ savedRandomMeals: res.data.meals }, function () {
                    console.log(this.state.savedRandomMeals);
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
                            <MealH2 />
                            <MealList>
                                {this.state.savedRandomMeals.map(randomMeal => {
                                    return (
                                        <RandomMealListItem
                                        key={randomMeal.idMeal}
                                        strMeal={randomMeal.strMeal}
                                        strArea={randomMeal.strArea}
                                        strCategory={randomMeal.strCategory}
                                        strInstructions={randomMeal.strInstructions}
                                        strMealThumb={randomMeal.strMealThumb}
                                        strYoutube={randomMeal.strYoutube}
                                        strSource={randomMeal.strSource}
                                        id={randomMeal.idMeal}
                                        loadRandomMeals={this.loadRandomMeals}
                                        />
                                    )
                                })}
                            </MealList>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
}

export default MealsHome;