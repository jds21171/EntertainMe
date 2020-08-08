import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { List, EventListItem } from "../components/List";
import { Input, SearchButton } from "../components/Input";

class Home extends Component {

    // instatiate state for list of books retrieved from googlebooks api and bookSearch value
    state = {
        activities: [],
        activitySearch: ""
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
        API.searchEvents(this.state.activitySearch)
            .then(res => {
                this.setState({ activities: res.data._embedded.events }, function () {
                    console.log(this.state.activities);
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
                                                name="activitySearch"
                                                value={this.state.activitySearch}
                                                onChange={this.handleInputChange}
                                                placeholder="Enter a city to search for upcoming events!"
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
                                {this.state.activities.map(activity => {
                                    return (
                                        <EventListItem
                                            key={activity.id}
                                            name={activity.name}
                                            city={activity._embedded.venues[0].city.name}
                                            state={activity._embedded.venues[0].state.stateCode}
                                            venue_address={activity._embedded.venues[0].address.line1}
                                            venue_name={activity._embedded.venues[0].name}
                                            image={activity.images[0].url}
                                            description={activity.pleaseNote}
                                            date={activity.dates.start.localDate}
                                            time={activity.dates.start.localTime}
                                            url={activity.url}
                                        />);
                                })}
                            </List>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

};

export default Home;