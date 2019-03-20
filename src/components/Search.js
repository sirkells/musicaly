import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchTerm } from "../actions";

const mapStateToProps = state => {
  return {
    searchQuery: state.searchQuery
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateSearchQuery: event => dispatch(setSearchTerm(event.target.value))
  };
};
class Search extends Component {
  // state = { searchQuery: "" };
  search = () => {
    const { searchArtist, searchQuery } = this.props;
    // console.log(this.props);
    searchArtist(searchQuery);
  };
  // searchArtist = () => {
  //   console.log("search:", this.props);
  //   this.props.searchArtist(this.props.store.searchQuery);
  // };
  // updateSearchQuery = event => {
  //   // console.log(event.target.value);
  //   this.props.store.updateSearchQuery();
  //   this.setState({ searchQuery: event.target.value });
  // };
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
