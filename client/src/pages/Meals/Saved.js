import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import { List, MealListItem } from "../../components/List";

class MealsSaved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // instantiate state for saved books
            savedMeals: [],
        };
    }

    // loads saved books when Saved page loads
    componentDidMount() {
        this.loadMeals();
    };

    loadMeals = event => {

        API.getMeals()
            .then(res => {
                this.setState({ savedMeals: res.data }, function () {
                    console.log(this.state.savedMeals);
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
                                {this.state.savedMeals.map(meal => {
                                    return (
                                        <MealListItem
                                            key={meal._id}
                                            strMeal={meal.strMeal}
                                            strArea={meal.strArea}
                                            strCategory={meal.strCategory}
                                            strInstructions={meal.strInstructions}
                                            strMealThumb={meal.strMealThumb}
                                            strYoutube={meal.strYoutube}
                                            strSource={meal.strSource}
                                            id={meal._id}
                                            loadMeals={this.loadMeals}
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

export default MealsSaved;