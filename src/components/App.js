import React, { Component } from "react";
import Artist from "./Artist";
import Tracks from "./Tracks";

const URL_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
  state = { searchQuery: "", artistData: null, topTracks: [] };

  updateSearchQuery = event => {
    // console.log(event.target.value);
    this.setState({ searchQuery: event.target.value });
  };
  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };

  searchArtist = () => {
    // fetch artist data using searchQuery
    fetch(`${URL_ADDRESS}/artist/${this.state.searchQuery}`)
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
        <input
          type="text"
          placeholder="Search for Artist"
          onChange={this.updateSearchQuery}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.searchArtist}>Search</button>
        <Artist artist={artistData} />
        <Tracks tracks={topTracks} />
      </div>
    );
  }
}

export default App;
