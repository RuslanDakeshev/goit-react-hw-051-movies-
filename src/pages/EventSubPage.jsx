import { useFetchEvent } from "hooks/useFetchEvent"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";


export const EventSubPage = () => {
    const movie = useFetchEvent()
    console.log(movie);
    const location = useLocation()
    const navigate = useNavigate
    

    

    // return <div>EVENT</div>

    return (
        
        movie && (
            <>
               
                <h2>{movie.title}</h2>
                <Link to='movieId' state={location.state}>More details</Link>
                <Outlet/>
             </>
         )
     )
}