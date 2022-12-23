import { useFetchEvent } from "hooks/useFetchEvent";
import { useNavigate, useLocation } from "react-router-dom";
// import { fetchEventsByCredits } from "services/eventsApi";
// import { useState, useEffect } from 'react';

// import { useParams } from 'react-router-dom';

export const EventDetailsPage = () => {
    const movie = useFetchEvent()
    const navigate = useNavigate()
    const location = useLocation()
    const getImgUrl = image => {
    if (image === null) {
      return 'https://img.icons8.com/pastel-glyph/512/film-reel--v2.png';
    }
    return `https://image.tmdb.org/t/p/w300${image}`;
  };
    // console.log(location);

//      const [credits, setCredits] = useState(null);
//   const { movieId } = useParams();

//   useEffect(() => {
//     fetchEventsByCredits(movieId).then(setCredits);
//   }, [movieId]);

    

    // const genres = movie.genres
    // ? movie.genres.map(genre => genre.name).join(', ')
    // : 'unknown';
    

    return (

    //     <>
    //         <button onClick={()=>{navigate(location?.state?.from ?? '/')}}>Go back</button>
    //   {movies && (
    //     <ul>
    //       {movies.map(movie => {
    //         return (
    //           <li
    //             key={movie.credit_id}
    //             name={movie.name}
    //             role={movie.character}
    //             photo_path={movie.profile_path}
    //           />
    //         );
    //       })}
    //     </ul>
    //   )}
    //   <p>Here will be additional info "Movie Cast"</p>
    // </>
        <>
            <button onClick={()=>{navigate(location?.state?.from ?? '/')}}>Go back</button>
            {movie && (
                <>
                <h2>{movie.title}</h2>
                {/* <p>Main genre:{genres}</p> */}
                    <p>Main subgenre:{movie.genres.map(genre => genre.name).join(', ')}</p>
                    <img src={getImgUrl(movie.poster_path)}
                        alt={movie.title}
                        width={350}
                    />
                    </>
            )}
        
        </>
    )
    
}