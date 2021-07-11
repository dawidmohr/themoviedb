import { API_KEY } from "../APIconfig";

/**
 * @param {String} searchName 
 */
export function searchMovie(searchName) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pl-PL&query=${searchName}&page=1&include_adult=false`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
