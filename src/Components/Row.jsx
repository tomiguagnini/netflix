import React from "react";
import { useState, useEffect } from "react";
import './Row.css'
import {getMovies} from "../services/fetchMovies.js"
import { IMG_URL } from "../requests/endpoints";




const Row = ({title, url,isLargeRow}) => {
    const [movies, setmovies] = useState([]);

    useEffect(() => {
        try {
          getMovies(url)
          .then((array) => setmovies(array));
        } catch (error) {
          console.error(error)
        }
       
      }, []);
      console.log("------");
     

  return (
    <>
      <h3 className={`title ${isLargeRow && "title_isLargeRow"}`}>{title}</h3>
      <div className="slider">
          {movies.map((movie) => (
            <img 
            key={movie.id}
            className={`slider_item ${isLargeRow && "slider_item_isLargeRow"}`} 
            src={IMG_URL + "/" + (isLargeRow? movie.poster_path: movie.backdrop_path)} 
            alt={movie.name}
            />
          ))}

      </div>
    </>
  );
};

export default Row;
