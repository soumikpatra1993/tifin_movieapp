import movieApi from "../apis/movieapi";
import {

  FETCH_TRENDING_MOVIES,

  FETCH_MOVIE_SEARCH,
} from './types'



export const fetchTrendingMovies = () => async dispatch => {
  const response = await movieApi.get(
    `/trending/all/day?api_key=5fb27ee2362c619dc78fe12b56540c4e`
  );
  dispatch({
    type: FETCH_TRENDING_MOVIES,
    payload: response.data.results
  });
};



export const fetchMovieSearch = (movie_title) => async dispatch => {
  const response = await movieApi.get(`/search/movie?api_key=5fb27ee2362c619dc78fe12b56540c4e&query=${movie_title}`)
  dispatch({
    type: FETCH_MOVIE_SEARCH,
    payload: response.data.results
  })
}