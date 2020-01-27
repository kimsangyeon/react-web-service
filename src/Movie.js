import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ id, year, title, summary, poster }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h1 className="movie__title">{title}</h1>
        <h5 className="movie__year">{year}</h5>
        <h6 className="movie__summary">{summary}</h6>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
