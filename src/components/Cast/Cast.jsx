import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieAPI from '../../services/movies-api';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const posterBaseUrl = movieAPI.IMG_BASE_URL;

  const getCastForMovie = async id => {
    try {
      const data = await movieAPI.fetchCastForMovie(id);
      const castForRender = data.filter(person => person.profile_path !== null);
      setCast(castForRender);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCastForMovie(movieId);
  }, [movieId]);

  return (
    <section>
      {cast && (
        <ul>
          {cast.map(person => (
            <li key={person.id}>
              <img
                src={`${posterBaseUrl}w185${person.profile_path}`}
                alt={person.character}
              />
              <p>{person.name}</p>
              <p>Character: {person.character}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
export default Cast;
