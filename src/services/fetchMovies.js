import axios from "axios";
import {API_KEY} from "../requests/endpoints"

const keyParams = `?api_key=${API_KEY}` 


function getMovies(url) {
    return axios
      .get(url)
      .then((response) => response.data.results)
      .catch((error) => console.error(error))
}
function getMovie(url){
  return axios
    .get(url + keyParams)
    .then((response) => response.data);
}



export {getMovies,getMovie}