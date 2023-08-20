import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import movieAPI from '../services/movies-api';
import Details from 'components/Details/Details';
import MoreInfo from 'components/MoreInfo/MoreInfo';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const posterBaseUrl = movieAPI.IMG_BASE_URL;

  const getDetailsForMovie = async id => {
    try {
      const data = await movieAPI.fetchDetailsForMovie(id);
      setMovieDetails(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getDetailsForMovie(movieId);
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <>
          <Details data={movieDetails} posterBaseUrl={posterBaseUrl} />
          <MoreInfo />
        </>
      )}
      <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
    </>
  );
};
export default MovieDetails;
