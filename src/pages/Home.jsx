import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import movieAPI from '../services/movies-api';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  const getTrendingMovies = async () => {
    try {
      const data = await movieAPI.fetchTrendingMovies();
      setTrendMovies(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <MoviesList movies={trendMovies}>
      <h1>Trending today</h1>
    </MoviesList>
  );
};
export default Home;
