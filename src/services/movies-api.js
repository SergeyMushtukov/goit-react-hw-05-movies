import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/';
const API_KEY = 'c31ac2320c74a8ac53f261be4bf1ffac';

async function fetchTrendingMovies() {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });

  const response = await axios.get(
    `${BASE_URL}trending/movie/day?${searchParams}`
  );

  if (response.data.results) {
    return response.data.results;
  }
  return Promise.reject(
    new Error(`
  There are no trend movies`)
  );
}

//----------------------

async function fetchMovieByTitle(searchQuery) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query: searchQuery,
  });

  const response = await axios.get(`${BASE_URL}search/movie?${searchParams}`);

  if (response.data.results) {
    return response.data.results;
  }
  return Promise.reject(
    new Error(`
  There are no movies for this request: ${searchQuery}`)
  );
}

//----------------------
async function fetchDetailsForMovie(id) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });

  const response = await axios.get(`${BASE_URL}movie/${id}?${searchParams}`);

  if (response.data) {
    return response.data;
  }
  return Promise.reject(
    new Error(`
  There are no details for this movie`)
  );
}

//----------------------
async function fetchCastForMovie(id) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });

  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?${searchParams}`
  );

  if (response.data.cast) {
    return response.data.cast;
  }
  return Promise.reject(
    new Error(`
  There are no info about cast for this movie`)
  );
}

//----------------------
async function fetchReviewsForMovie(id) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });

  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?${searchParams}`
  );

  if (response.data.results) {
    return response.data.results;
  }
  return Promise.reject(
    new Error(`
  There are no reviews for this movie`)
  );
}

//----------------------

const api = {
  fetchTrendingMovies,
  fetchMovieByTitle,
  fetchDetailsForMovie,
  fetchCastForMovie,
  fetchReviewsForMovie,
  IMG_BASE_URL,
};

export default api;
