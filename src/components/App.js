import React, { Component } from "react";
import { connect } from "react-redux";
import Artist from "./Artist";
import Tracks from "./Tracks";
import Search from "./Search";

const URL_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
  state = { artistData: null, topTracks: [] };

  componentDidMount() {
    // console.log("store:", this.props.store);
    this.searchArtist("burna boy");
  }
  // updateSearchQuery = event => {
  //   // console.log(event.target.value);
  //   this.setState({ searchQuery: event.target.value });
  // };
  // handleKeyPress = event => {
  //   if (event.key === "Enter") {
  //     this.search();
  //   }
  // };

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
    // const { searchQuery, updateSearchQuery } = this.props;
    return (
      <div>
        <h1>Musicaly</h1>
        {/* <input
          type="text"
          placeholder="Search for Artist"
          onChange={updateSearchQuery}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.search}>Search</button> */}
        <Search searchArtist={this.searchArtist} />
        <Artist artist={artistData} />
        <Tracks tracks={topTracks} />
      </div>
    );
  }
}

export default App;
