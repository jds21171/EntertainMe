import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import { List, BookListItem } from "../../components/List";

class BooksSaved extends Component {
    constructor(props) {
        super(props);
        // instantiate state for saved books
        this.state = {
            savedBooks: []
        };
    }
    // loads saved books when Saved page loads
    componentDidMount() {
        this.loadBooks();
    };

    loadBooks = event => {

        API.getBooks(this.state.savedBooks)
            .then(res => {
                this.setState({ savedBooks: res.data }, function () {
                    console.log(this.state.savedBooks);
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
                                {this.state.savedBooks.map(book => {
                                    return (
                                        <BookListItem
                                            key={book._id}
                                            title={book.title}
                                            authors={book.authors}
                                            link={book.link}
                                            description={book.description}
                                            image={book.image}
                                            id={book._id}
                                            loadBooks={this.loadBooks}
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

export default BooksSaved;