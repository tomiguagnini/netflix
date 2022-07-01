const API_KEY = process.env.REACT_APP_API_KEY || '';
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const IMG_FULL = "https://image.tmdb.org/t/p/original/";



const requests = {
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumantaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchDiscover: `${BASE_URL}/discover/movie?api_key=${API_KEY}`,
    fetchMovieForID: `${BASE_URL}/movie/`
  }


export {requests,IMG_URL,IMG_FULL,API_KEY};