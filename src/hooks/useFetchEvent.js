import { useEffect, useState} from "react";
import { fetchEventById } from "services/eventsApi";
import { useParams } from "react-router-dom";

export const useFetchEvent = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const { movieId } = useParams()
    
    

    // useEffect(() => {
    //   const loadMovieData = async () => {
    //     const data = await fetchEventById(movieId);
    //     return data;
    //   };
    //   if (doOneFetch.current === null) {
    //     loadMovieData().then(setMovieDetails);
    //     doOneFetch.current = 1;
    //   }
    // }, [movieId]);


    useEffect(() => {
        fetchEventById(movieId).then(setMovieDetails)
    }, [movieId]);

     return movieDetails
    
    

   
}