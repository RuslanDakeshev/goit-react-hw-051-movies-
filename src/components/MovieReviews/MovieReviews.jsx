import { useState, useEffect } from 'react';
import { fetchEventsByReviews } from 'services/eventsApi';
import { useParams } from 'react-router-dom';

export const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchEventsByReviews(movieId).then(setReviews);
  }, [movieId]);
    
    if (!reviews) {
        return;
    }

  return (
    <>
      {reviews.length === 0 ? (
        <p>There are no reviews yet</p>
      ) : (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <div>
                  Written by {review.author},{' '}
                  {review.created_at.substring(0, 10)}
                </div>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};