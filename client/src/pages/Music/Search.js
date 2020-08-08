import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import { List, SongListItem } from "../../components/List";
import { Input, SearchButton } from "../../components/Input";

class MusicSearch extends Component {

    // instatiate state for list of books retrieved from googlebooks api and bookSearch value
    state = {
        songs: [],
        songSearch: ""
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
        API.searchSongs(this.state.songSearch)
            .then(res => {
                this.setState({ songs: res.data.search.data.tracks }, function () {
                    console.log(this.state.songs);
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
                                                name="songSearch"
                                                value={this.state.songSearch}
                                                onChange={this.handleInputChange}
                                                placeholder="Search for a Song"
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
                                {this.state.songs.map(song => {
                                    return (
                                        <SongListItem
                                            key={song.id}
                                            artistName={song.artistName}
                                            name={song.name}
                                            albumName={song.albumName}
                                            preview={song.previewURL}
                                            image={`https://www.google.com/search?tbm=isch&q=${song.albumName.replace(/\s+/g, "+")}+by+${song.artistName.replace(/\s+/g, "+")}`}
                                            link={`https://www.youtube.com/search?q=${song.name.trim().replace(/\s+/g, "+")}by${song.artistName.trim().replace(/\s+/g, "+")}`}
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

export default MusicSearch;