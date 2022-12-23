import { fetchEvents } from 'services/eventsApi';
import { useState, useEffect } from 'react';
import { Link, Outlet , useLocation } from 'react-router-dom';

export const EventsPage = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation()
   

  useEffect(() => {
    fetchEvents().then(setMovies);
  }, []);
  return (
    movies && (
      <>
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${id}`} state={{from:location}} >{title}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </>
    )
  );
};
