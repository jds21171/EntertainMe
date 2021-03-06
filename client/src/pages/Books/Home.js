import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col, BookH2 } from "../../components/Grid";
import { List, NYTBookListItem } from "../../components/List";

class BooksHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savednytBooks: []
        };
    }

    componentDidMount() {
        this.loadNYTBooks();
    };


    loadNYTBooks = event => {
        API.getNYTBooks()
            .then(res => {
                this.setState({ savednytBooks: res.data.results.books }, function () {
                    console.log(this.state.savednytBooks);
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
                            <BookH2 />
                            <List>
                                {this.state.savednytBooks.map(NYTbook => {
                                    return (
                                        <NYTBookListItem
                                            key={NYTbook.primary_isbn10}
                                            title={NYTbook.title}
                                            author={NYTbook.author}
                                            link={NYTbook.amazon_product_url}
                                            description={NYTbook.description}
                                            image={NYTbook.book_image}
                                            id={NYTbook.primary_isbn10}
                                            loadNYTBooks={this.loadNYTBooks}
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

export default BooksHome;