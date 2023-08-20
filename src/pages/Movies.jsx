import { useState, useEffect } from 'react';
import movieAPI from '../services/movies-api';
import { useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query.trim() !== '' ? { query } : {};
    setSearchParams(nextParams);
    if (query.trim() === '') {
      setMovies([]);
    }
  };

  const getMoviesByTitle = async searchQuery => {
    try {
      const data = await movieAPI.fetchMovieByTitle(searchQuery);
      setMovies(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    getMoviesByTitle(query);
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={updateQueryString} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
