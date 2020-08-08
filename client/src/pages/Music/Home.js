import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col, MusicH2 } from "../../components/Grid";
import { SongList, TrendingSongListItem } from "../../components/List";

class MusicHome extends Component {

    state = {
        savedTrendingSongs: []
    };

    componentDidMount() {
        this.loadTrendingSongs();
        // const audioEl = document.getElementsByClassName("audio-element")[0]
        // audioEl.play()
    };


    loadTrendingSongs = event => {
        API.getTrendingSongs()
            .then(res => {
                this.setState({ savedTrendingSongs: res.data.tracks }, function () {
                    console.log(this.state.savedTrendingSongs);
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
                            <MusicH2 />
                            <SongList>
                                {this.state.savedTrendingSongs.map(trendingSong => {
                                    return (
                                        <TrendingSongListItem
                                        key={trendingSong.id}
                                        artistName={trendingSong.artistName}
                                        name={trendingSong.name}
                                        albumName={trendingSong.albumName}
                                        preview={trendingSong.previewURL}
                                        image={`https://www.google.com/search?tbm=isch&q=${trendingSong.albumName.replace(/\s+/g, "+")}+by+${trendingSong.artistName.replace(/\s+/g, "+")}`}
                                        link={`https://www.youtube.com/search?q=${trendingSong.name.trim().replace(/\s+/g, "+")} by ${trendingSong.artistName.trim().replace(/\s+/g, "+")}`}
                                        id={trendingSong.id}
                                        loadTrendingSongs={this.loadTrendingSongs}
                                        />
                                    )
                                })}
                            </SongList>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
}

export default MusicHome;