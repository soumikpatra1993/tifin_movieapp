import React from "react";
import { connect } from "react-redux";

import { fetchTrendingMovies } from "../actions";

import "../assets/css/moviesList.scss";

class TrendingMovies extends React.Component {
  componentDidMount = async () => {
    this.props.fetchTrendingMovies();
  };

  render() {
    return (
      <div className="container text-center">
        <h2> TRENDING </h2>
        <div
          className="row"
          style={{
              display: "flex",
            justifyContent: "center",
            flexWrap :"wrap",
            padding: "0 25rem"
          }}
        >
          {this.props.trending.map(movie => {
            return (
              <div
                className="card"
                style={{
                  width: "rem",
                  padding:" 0"
                }}
                key={movie.id}
              >
                <div className="card-img-top">
                 
                    <img
                      src={`https://image.tmdb.org/t/p/w154${
                        movie.poster_path
                      }`}
                      alt={movie.title}
                    />
               
                  <span> ☆{movie.vote_average} </span>
                </div>
                <div className="card-title">
                  <p> {movie.release_date}</p> <h6>{movie.title}</h6>
                </div>
              </div>
            );
          })}
        </div>
        <hr className="cards-separator" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trending: state.trending
  };
};

export default connect(
  mapStateToProps,
  {
    fetchTrendingMovies
  }
)(TrendingMovies);
