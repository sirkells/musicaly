import { CHANGE_SEARCH_TERM } from "./constant";

export const setSearchTerm = text => {
  return {
    type: CHANGE_SEARCH_TERM,
    payload: text
  };
};
