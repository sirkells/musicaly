import React, { Component } from "react";

class Search extends Component {
  state = { searchQuery: "" };

  searchArtist = () => {
    this.props.searchArtist(this.state.searchQuery);
  };
  updateSearchQuery = event => {
    // console.log(event.target.value);
    this.setState({ searchQuery: event.target.value });
  };
  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search for Artist"
          onChange={this.updateSearchQuery}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  }
}

export default Search;
