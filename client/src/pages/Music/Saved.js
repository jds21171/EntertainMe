import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import { SongList, SongListItem } from "../../components/List";

class MusicSaved extends Component {

    // instantiate state for saved books
    state = {
        savedSongs: [],
    };

    // loads saved books when Saved page loads
    componentDidMount() {
        this.loadSongs();
    };

    loadSongs = event => {

        API.getSongs()
            .then(res => {
                this.setState({ savedSongs: res.data }, function () {
                    console.log(this.state.savedSongs);
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
                            <SongList>
                                {this.state.savedSongs.map(song => {
                                    return (
                                        <SongListItem
                                            key={song._id}
                                            artistName={song.artistName}
                                            name={song.name}
                                            albumName={song.albumName}
                                            preview={song.preview}
                                            image={song.image}
                                            link={song.link}
                                            id={song._id}
                                            loadSongs={this.loadSongs}
                                        />
                                    );
                                })}
                            </SongList>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

};

export default MusicSaved;