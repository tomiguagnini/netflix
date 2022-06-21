import axios from "axios";


function getMovies(url) {
    return axios
      .get(url)
      .then((response) => response.data.results);
      //.catch((error) => console.error(error));
}



export {getMovies}