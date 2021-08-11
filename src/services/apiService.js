import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

async function getTrendingFilms() {
  const resp = await axios({
    method: "GET",
    url: "/trending/movie/week?api_key=8d4e0a5a0c37d4780eefdf617d0feea1",
  });
  return resp;
}

function getFilmById(id) {
  return axios({
    method: "GET",
    url: `/movie/${id}?api_key=8d4e0a5a0c37d4780eefdf617d0feea1`,
  });
}

function getFilmsByQuery(query) {
  return axios({
    method: "GET",
    url:
      "/search/movie?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&query=" + query,
  });
}

function getCastInfo(id) {
  return axios.get(
    `/movie/${id}/credits?api_key=8d4e0a5a0c37d4780eefdf617d0feea1`
  );
}

function getReviewsInfo(id) {
  return axios.get(
    `/movie/${id}/reviews?api_key=8d4e0a5a0c37d4780eefdf617d0feea1`
  );
}

export {
  getTrendingFilms,
  getFilmById,
  getFilmsByQuery,
  getCastInfo,
  getReviewsInfo,
};

// const BASE_URL = "https://api.themoviedb.org/3";
// const API_KEY = "6914e86918040074e2fe382ba8e8cb5e";

// async function apiService(url = "", config = {}) {
//   const response = await fetch(url, config);
//   return response.ok
//     ? await response.json()
//     : Promise.reject(
//         new Error("404 The resource you requested could not be found 🥺")
//       );
// }

// export function getTrending() {
//   return apiService(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`);
// }

// export function searchMovies(query) {
//   return apiService(
//     `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
//   );
// }

// export function getMovieDetails(movieId) {
//   return apiService(
//     `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
//   );
// }

// export function getMovieCredits(movieId) {
//   return apiService(
//     `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
//   );
// }

// export function getMovieReviews(movieId) {
//   return apiService(
//     `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
//   );
// }
