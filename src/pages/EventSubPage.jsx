import { useFetchEvent } from "hooks/useFetchEvent"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { MoviesList } from "components/MoviesList/MoviesList";


export const EventSubPage = () => {
    const movie = useFetchEvent()
    console.log(movie);
    const location = useLocation()
    const navigate = useNavigate
    

    

    // return <div>EVENT</div>

    return (
        <>
        movie && (
            <>
               
                <h2 MoviesList={movie}/>
                <Link to='movieId' state={location.state}>More details</Link>
                <Outlet/>
             </>
            )
            </>
     )
}