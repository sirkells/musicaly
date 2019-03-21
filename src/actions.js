import {
  CHANGE_SEARCH_TERM,
  FETCH_COMPLETED,
  FETCH_FAILED,
  FETCH_STARTED,
  FETCH_TOPTRACK_COMPLETED,
  FETCH_TOPTRACK_FAILED,
  FETCH_TOPTRACK_STARTED
} from "./constant";
const URL_ADDRESS = "https://spotify-api-wrapper.appspot.com";
export const setSearchTerm = text => {
  return {
    type: CHANGE_SEARCH_TERM,
    payload: text
  };
};

export const getArtist = searchQuery => dispatch => {
  dispatch({ type: FETCH_STARTED });
  fetch(`${URL_ADDRESS}/artist/${searchQuery}`)
    .then(response => response.json())
    .then(res => {
      // check if the artist in searchQuery exist in the api
      if (res.artists.total > 0) {
        const artistData = res.artists.items[0];
        dispatch({
          type: FETCH_COMPLETED,
          payload: artistData
        });

        // fetches top track of artist based on artist id
        dispatch({
          type: FETCH_TOPTRACK_STARTED
        });
        fetch(`${URL_ADDRESS}/artist/${artistData.id}/top-tracks`)
          .then(response => response.json())
          .then(res =>
            dispatch({
              type: FETCH_TOPTRACK_COMPLETED,
              payload: res.tracks
            })
          )
          .catch(err =>
            dispatch({
              type: FETCH_TOPTRACK_FAILED,
              payload: err.message
            })
          );
      }
    })
    .catch(err =>
      dispatch({
        type: FETCH_FAILED,
        payload: err.message
      })
    );
};
