import { FETCH_MOVIE_SEARCH } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_MOVIE_SEARCH:
      return action.payload;
    default:
      return state;
  }
};
