import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomePage } from "pages/HomePage";
import { EventsPage } from "pages/EventsPage";
import { EventSubPage } from "pages/EventSubPage";
import { EventDetailsPage } from "pages/EventDetailsPage";
import { SearchEventsPage } from "pages/SearchEventsPage";

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element = {<Layout/>}>
//         <Route index element={<HomePage />} />
//         <Route path="events" element={<EventsPage />} >
//         <Route path=":movieId" element={<EventSubPage/>}/>
//         </Route>

//         <Route path="search" element={<SearchEventsPage />} >
//         <Route path=":movieId" element={<EventSubPage/>}/>
//         </Route>

//         <Route path='events/:movieId/details' element={<EventDetailsPage />} />
//         <Route path='search/:movieId/details' element={<EventDetailsPage />} />

//         </Route>
//       </Routes>
//   )
// }

export const App = () => {
  return (
    <Routes>
      <Route path="/" element = {<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<SearchEventsPage />} />
          {/* <Route path=":movieId" element={<EventSubPage />} /> */}
        <Route path='movies/:movieId' element={<EventSubPage />} >
          <Route path='cast' element={<EventDetailsPage />} /> 
          <Route path='reviews' element={<EventDetailsPage />} />
        </Route>
          <Route path="*" element={<HomePage />} />
       
          {/* </Route> */}
        


        

        </Route>
      </Routes>
  )
}

//  <Route path="search" element={<SearchEventsPage />} >
//           <Route path=":movieId" element={<EventSubPage />} />
