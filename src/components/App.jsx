import { Routes, Route, Switch } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomePage } from "pages/HomePage";
import { EventsPage } from "pages/EventsPage";
import { EventSubPage } from "pages/EventSubPage";
import { MoviePage } from "pages/MoviePage";
import { SearchEventsPage } from "pages/SearchEventsPage";
import { MovieCast } from "./MovieCast/MovieCast";
import { MovieReviews } from "./MovieReviews/MovieReviews";



export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path='movies' element={<SearchEventsPage />}/>
        <Route path="movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
      </Route>
    </Routes>
  )
}







// export const App = () => {
//   return (
//     <Switch>
//     <Routes>
//       <Route path="/" exact element = {<Layout/>}>
//         <Route index element={<HomePage />} />
//          <Route path="movies" element={<EventsPage />} >
//         {/*<Route path=":movieId" element={<EventSubPage/>}/>
//         </Route>

//         <Route path="search" element={<SearchEventsPage />} >
//         <Route path=":movieId" element={<EventSubPage/>}/>
//         </Route>

//         <Route path='events/:movieId/details' element={<EventDetailsPage />} />
//         <Route path='search/:movieId/details' element={<EventDetailsPage />} /> */}
//             <Route>
//               <NotFoundView/>
//       </Route>
//         </Route>
//       </Routes>
//       </Switch>
//   )
// }









// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element = {<Layout/>}>
//         <Route index element={<HomePage />} />
//         <Route path="movies" element={<SearchEventsPage />} />
//           {/* <Route path=":movieId" element={<EventSubPage />} /> */}
//         <Route path='movies/:movieId' element={<EventSubPage />} >
//           <Route path='cast' element={<EventDetailsPage />} /> 
//           <Route path='reviews' element={<EventDetailsPage />} />
//         </Route>
//           <Route path="*" element={<HomePage />} />
       
//           {/* </Route> */}
        


        

//         </Route>
//       </Routes>
//   )
// }


