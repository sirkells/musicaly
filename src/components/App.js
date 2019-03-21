import React, { Component } from "react";
import { connect } from "react-redux";
import Artist from "./Artist";
import Tracks from "./Tracks";
import Search from "./Search";
import { setSearchTerm, getArtist } from "../actions";

const mapStateToProps = state => {
  return {
    searchQuery: state.changeSearchTerm.searchQuery,
    artistData: state.searchForArtist.artistData,
    topTracks: state.searchForArtist.topTracks,
    isLoading: state.searchForArtist.isLoading,
    hasFailed: state.searchForArtist.hasFailed,
    errorMessage: state.searchForArtist.errorMessage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateSearchQuery: event => dispatch(setSearchTerm(event.target.value)),
    getArtistData: searchQuery => dispatch(getArtist(searchQuery))
  };
};
class App extends Component {
  componentDidMount() {
    const { getArtistData } = this.props;
    getArtistData("burna boy");
  }
  render() {
    const { artistData, topTracks } = this.props;
    return (
      <div>
        <h1>Musicaly</h1>
        <Search />
        <Artist artist={artistData} />
        <Tracks tracks={topTracks} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
