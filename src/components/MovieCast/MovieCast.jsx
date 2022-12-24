import { useState, useEffect } from 'react';
import { fetchEventsByCredits } from 'services/eventsApi';
import { useParams } from 'react-router-dom';
import { ActorCard } from 'components/ActorCard/ActorCard';

export const MovieCast = () => {
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();
  // const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    fetchEventsByCredits(movieId).then(setCredits);
  }, [movieId]);

  if (!credits) {
    return;
  }

  return (
    <>
      {credits.length === 0 && (
        <p>Sorry, we don't have any cast on this movie</p>
      )}
      {credits && (
        <ul>
          {credits.map(credit => {
            return (
              <ActorCard
                key={credit.credit_id}
                name={credit.name}
                role={credit.character}
                photo_path={credit.profile_path}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};
