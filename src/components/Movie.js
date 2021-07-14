import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";
import { Link } from 'react-router-dom';

function Movie({ id, year, title, summary, poster, genres}) {
  if(summary.length > 200)
    var _summary = summary.slice(0, 200) + '......';
  return(
    <div className="movie">
      <Link
        to={{
          pathname: '/movie-detail',
          id,
        }}
      >
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => {
              return <li key={index} className="movie__genres">{genre}</li>;
            })}
          </ul>
          <p className="movie__summary">{_summary}</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;