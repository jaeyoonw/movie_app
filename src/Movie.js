import React from 'react';
import Proptypes from 'prop-types';
function Movie({year, title, summary, image, genres}) {   // 영화에는 state가 필요없다. Movie Component
  return (
    <div className="movie">
      <img src={image} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">{genres && genres.map((genre, index) => (
          <li key={index} className="genres__genre">{genre}<span>,</span></li>))}
        </ul> 
        
        {/* 여기서 에러가 발생하는 이유는 genres array is undefined */}
        <p className="movie__summary">{summary.slice(0, 180)}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  year: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired, 
  image: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string).isRequired
}

export default Movie;