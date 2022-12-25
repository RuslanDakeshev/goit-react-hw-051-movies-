import { fetchEventsByName } from 'services/eventsApi';
import { useEffect, useState } from 'react';
import { useSearchParams,Outlet } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Form,Input,Button } from './SearchMoviesPage.styled';


export const SearchMoviesPage = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('moviename');
  

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
      
      <Form onSubmit={handleSubmit}>
      <Input
       name="query"
        type="text"
        autoComplete="off"
        placeholder="Search for movies..."
      />
      <Button type="submit">Search</Button>
    </Form>
      
      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button>Search</button>
      </form> */}
      
      {movies && (<MoviesList movies={movies} />)}
      <Outlet/>

      </>
      
          
      );
  
    
  
      
};
