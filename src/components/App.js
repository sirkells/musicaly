import React, { Component } from "react";
import Artist from "./Artist";
import Tracks from "./Tracks";
import Search from "./Search";

const URL_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
  state = { artistData: null, topTracks: [] };

  componentDidMount() {
    this.searchArtist("burna boy");
  }
  searchArtist = searchQuery => {
    // fetch artist data using searchQuery gotten from search component
    fetch(`${URL_ADDRESS}/artist/${searchQuery}`)
      .then(response => response.json())
      .then(res => {
        // check if the artist in searchQuery exist in the api
        if (res.artists.total > 0) {
          const artistData = res.artists.items[0];
          this.setState({ artistData: artistData });

          // fetches top track of artist based on artist id
          fetch(`${URL_ADDRESS}/artist/${artistData.id}/top-tracks`)
            .then(response => response.json())
            .then(res => this.setState({ topTracks: res.tracks }))
            .catch(err => alert(err.message));
        }
      })
      .catch(err => alert(err.message));
  };
  render() {
    console.log("state:", this.state);
    const { artistData, topTracks } = this.state;
    return (
      <div>
        <h1>Musicaly</h1>
        <Search searchArtist={this.searchArtist} />
        <Artist artist={artistData} />
        <Tracks tracks={topTracks} />
      </div>
    );
  }
}

export default App;
