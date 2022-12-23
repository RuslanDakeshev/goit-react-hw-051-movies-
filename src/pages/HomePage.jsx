
import { useEffect, useState } from 'react';
import { fetchEvents } from 'services/eventsApi';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchEvents().then(setMovies);
  }, []);
  return (
    movies && (
      <>
        <div>20 Most Popular Movies Right Now</div>
        <MoviesList movies={movies} />
      </>
    )
  );
};
