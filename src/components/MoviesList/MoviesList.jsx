import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Title } from './MoviesList.styled';


const MoviesList = ({ movies, children }) => {
  const location = useLocation();
  return (
    <div>
      {children}
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <Title>{movie.title}</Title>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.element,
};

export default MoviesList;
