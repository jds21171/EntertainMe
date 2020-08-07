import React, { Component } from "react";
// import API from "../utils/API";
import { Container, Row, Col, H2 } from "../components/Grid";
// import { NYTBookList, NYTBookListItem } from "../components/List";

class Home extends Component {

    state = {
        // savednytBooks: []
    };

    componentDidMount() {
        // this.loadNYTBooks();
    };


    // loadNYTBooks = event => {
    //     API.getNYTBooks()
    //         .then(res => {
    //             this.setState({ savednytBooks: res.data.results.books }, function () {
    //                 console.log(this.state.savednytBooks);
    //             })
    //         })
    //         .catch(err => console.log(err))
    // }

    render() {
        return (
            <div>
                <Container>
                    <Row fluid>
                        <Col size="xs-12">
                            <H2 />
                            {/* <NYTBookList>
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
                            </NYTBookList> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
}

export default Home;