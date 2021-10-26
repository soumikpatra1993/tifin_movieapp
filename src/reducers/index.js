import {
    combineReducers
  } from "redux";
  import TrendingMoviesReducer from "./TrendingMoviesReducer";

  import movieSearch from './movieSearch';
  
  
  export default combineReducers({
    trending: TrendingMoviesReducer,
    movieSearch: movieSearch,
  });