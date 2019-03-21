import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchTerm, getArtist } from "../actions";

const mapStateToProps = state => {
  return {
    searchQuery: state.changeSearchTerm.searchQuery
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateSearchQuery: event => dispatch(setSearchTerm(event.target.value)),
    getArtistData: searchQuery => dispatch(getArtist(searchQuery))
  };
};
class Search extends Component {
  search = () => {
    const { getArtistData, searchQuery } = this.props;
    getArtistData(searchQuery);
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.search();
    }
  };

  render() {
    const { updateSearchQuery } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Search for Artist"
          onChange={updateSearchQuery}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.search}>Search</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
