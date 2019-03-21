import {
  CHANGE_SEARCH_TERM,
  FETCH_COMPLETED,
  FETCH_FAILED,
  FETCH_STARTED,
  FETCH_TOPTRACK_COMPLETED,
  FETCH_TOPTRACK_FAILED,
  FETCH_TOPTRACK_STARTED
} from "./constant";

const initialState = {
  searchQuery: ""
};

export const changeSearchTerm = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

const initialStateArtist = {
  artistData: null,
  topTracks: [],
  isLoading: false,
  hasFailed: false,
  errorMessage: ""
};
export const searchForArtist = (state = initialStateArtist, action = {}) => {
  switch (action.type) {
    case FETCH_STARTED:
      return { ...state, isLoading: true };
    case FETCH_COMPLETED:
      return { ...state, artistData: action.payload, isLoading: false };
    case FETCH_TOPTRACK_STARTED:
      return { ...state, isLoading: true };
    case FETCH_TOPTRACK_COMPLETED:
      return { ...state, topTracks: action.payload, isLoading: false };
    case FETCH_TOPTRACK_FAILED:
      return {
        ...state,
        hasFailed: true,
        isLoading: false,
        errorMessage: action.payload
      };
    case FETCH_FAILED:
      return {
        ...state,
        hasFailed: true,
        isLoading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
