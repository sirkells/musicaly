import React, { Component } from "react";

class App extends Component {
  state = { serachQuery: "" };

  updateSearchQuery = event => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <h1>Musicaly</h1>
        <input
          type="text"
          placeholder="Search for Artist"
          onChange={this.updateSearchQuery}
        />
        <button>Search</button>
      </div>
    );
  }
}

export default App;
