import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieAPI from '../../services/movies-api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const getReviewsForMovie = async id => {
    try {
      const data = await movieAPI.fetchReviewsForMovie(id);
      setReviews(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getReviewsForMovie(movieId);
  }, [movieId]);

  return (
    <section>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </section>
  );
};
export default Reviews;
