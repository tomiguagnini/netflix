import React from "react";
import { useEffect, useState } from "react";
import { IMG_FULL, requests } from "../requests/endpoints";
import { getMovies } from "../services/fetchMovies";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovies(requests.fetchDiscover).then((res) =>
      setMovie(res[Math.floor(Math.random() * res.length)])
    );
  }, []);

  const truncateStr = (str, num) => {
    return str?.length > num ? str.slice(0, num) + "...":str;
  }
   
  

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${IMG_FULL + movie?.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_container">
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
                <button className="banner_button">Ver Ahora</button>
                <button className="banner_button">Mas Info</button>
            </div>
            <h2 className="banner_description">{truncateStr(movie?.overview,250)}</h2>
        </div>
      </header>
    </div>
  );
};

export default Banner;
