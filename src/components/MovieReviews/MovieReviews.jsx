import { useState, useEffect } from 'react';
import { fetchEventsByReviews } from 'services/eventsApi';
import { useParams } from 'react-router-dom';
import { List, Author, Text } from '../MovieReviews/MovieReviews.styled';


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
    <List>
      {reviews.length === 0 ? (
        <Text>There are no reviews yet</Text>
      ) : (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <Author>
                  Written by {review.author},{' '}
                  {review.created_at.substring(0, 10)}
                </Author>
                {review.content}
              </li>
            );
          })}
        </ul>
      )}
    </List>
  );
};