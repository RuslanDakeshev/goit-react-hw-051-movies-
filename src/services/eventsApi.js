import axios from "axios";

const KEY = '5c79cb68282b6d2568848c7dc97d0ef0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

//список самых популярных фильмов на сегодня для создания коллекции на главной странице.
export async function fetchEvents() {
    const response = await axios('trending/movie/day', {
      params: {
        api_key: KEY,
        size: 20,
      },
    });
    return response.data.results
}

//пзапрос полной информации о фильме для страницы кинофильма.

export async function fetchEventById(movie_id) {
  const {data} = await axios(`movie/${movie_id}`, {
    params: {
      api_key: KEY,
      id:movie_id,
      
    },
  });
  return data
}

//поиск кинофильма по ключевому слову на странице фильмов.

export async function fetchEventsByName(keyword,page) {
  const response = await axios('search/movie', {
    params: {
      api_key: KEY,
      page,
      query:keyword,
    },
  });
  return response.data.results;
}

//запрос информации о актёрском составе для страницы кинофильма.

export async function fetchEventsByCredits(movie_id) {
  const response = await axios('movie/{movie_id}/credits', {
    params: {
      api_key: KEY,
      id: movie_id,

    },
  });
  return response.data.cast
}

//запрос обзоров для страницы кинофильма.

export async function fetchEventsByReviews(movie_id) {
  const response = await axios('movie/{movie_id}/reviews', {
    params: {
      api_key: KEY,
      id: movie_id,
    },
  });
  return response.data.results;
}
