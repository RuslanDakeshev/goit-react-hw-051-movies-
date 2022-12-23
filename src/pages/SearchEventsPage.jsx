import { fetchEventsByName } from 'services/eventsApi';
import { useEffect, useState } from 'react';
import { useSearchParams, Link, Outlet, useLocation } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
// import { SearchBox } from 'components/SearcBox/SearchBox';

export const SearchEventsPage = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('moviename');
  const location = useLocation();

  useEffect(() => {
    if (query === null || query === '') return;
    async function fetchEvents() {
      const data = await fetchEventsByName(query,page);
      setMovies(data);
    }
    fetchEvents();
  }, [query,page]);

  const handleSubmit = event => {
      event.preventDefault();
      setPage(1);
    const form = event.target;
    setSearchParams({ moviename: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button>Search</button>
      </form>
      {movies && (
              <>
                  {/* <MoviesList movies={movies} /> */}
          <ul>
            {movies.map(({ title, id }) => (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <Outlet />
        </>
      )}
    </>
      
    //   <>
    //       {/* <form onSubmit={handleSubmit}>
    //     <input type="text" name="query" />
    //      <button>Search</button>
    //   </form> */}
    //       <SearchBox onSubmit={handleSubmit} />
    //       <MoviesList movies={movies} />
    //       {/* <Outlet /> */}
    //   </>
  );
};
