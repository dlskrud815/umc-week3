import React from 'react';

function Movie(props) {
  return (
    <div className="movie">
      <img src={props.posterPath} alt={props.title} />
      <div className="movie-description">
        <div className="movie-description-title">{props.title}</div>
        <p>{props.overview}</p>
      </div>
      <div className="movie-info">
        <div className="movie-title">{props.title}</div>
        <div className="movie-rating">{props.voteAverage}</div>
      </div>
    </div>
  );
}

export default Movie;
