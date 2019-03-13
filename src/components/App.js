import React, { Component } from "react";

class App extends Component {
  state = { searchQuery: "" };

  updateSearchQuery = event => {
    // console.log(event.target.value);
    this.setState({ searchQuery: event.target.value });
  };
  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };

  searchArtist = () => {};
  render() {
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
      </div>
    );
  }
}

export default App;
