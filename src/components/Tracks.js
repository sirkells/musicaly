import React, { Component } from "react";

class Tracks extends Component {
  state = { isPlaying: false, currentAudio: null, currenTrackUrl: null };
  // double arrow function returns its own function to the next task
  playTrack = selectedTrackUrl => () => {
    // plays track using track url
    const selectedAudio = new Audio(selectedTrackUrl);
    const { isPlaying, currentAudio, currenTrackUrl } = this.state;
    // checks if audio is not playing
    if (!isPlaying) {
      // plays selected audio
      selectedAudio.play();
      // updates state
      this.setState({
        isPlaying: true,
        currentAudio: selectedAudio,
        currenTrackUrl: selectedTrackUrl
      });
      // if audio is already playing
    } else {
      // pauses states Cureentaudio
      // audio here refers to this.state.audio
      currentAudio.pause();
      // checks if the track clicked is the current playing track
      // remains pause if true and updates state
      if (currenTrackUrl === selectedTrackUrl) {
        this.setState({ isPlaying: false });
        // if the track clicked isnt the current plays selected track and update state
      } else {
        // notice here the audio is the selectedAudio
        selectedAudio.play();
        this.setState({
          currentAudio: selectedAudio,
          currenTrackUrl: selectedTrackUrl
        });
      }
    }
  };

  render() {
    const { tracks } = this.props;
    return (
      <div>
        {tracks.map(track => {
          const { id, name, album, preview_url } = track;
          return (
            <div key={id} onClick={this.playTrack(preview_url)}>
              <img
                src={album.images[0].url}
                alt="track-image"
                style={{ height: 200, width: 200 }}
              />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tracks;
