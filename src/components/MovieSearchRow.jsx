import React from "react";

class MovieRow extends React.Component {
  viewMovie() {}

  render() {
    const movieId = this.props.movie.id;

    return (
      <div key={this.props.movie.id}>
        <div className="movie_container" style={{ padding: "1rem 8rem", display: "flex", justifyContent: 'center'}}>
          <div className="col" style={{ display: "flex", flexDirection: "column" }}>
            <div className="movie-poster">
              <img alt="poster" width="120" src={this.props.movie.poster_src} />
            </div>

            <div className="movie-details">
              <h3>{this.props.movie.title}</h3>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default MovieRow;
