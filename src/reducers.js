import { CHANGE_SEARCH_TERM } from "./constant";

const initialState = {
  searchQuery: ""
};

export const searchArtist = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};
