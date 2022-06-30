import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { IMG_URL, requests } from '../../requests/endpoints';
import { getMovie } from '../../services/fetchMovies';


const Movie = () => {
    const [movie, setmovie] = useState(null)
    const {id} = useParams()
    

    useEffect(()=>{
        getMovie(requests.fetchMovieForID + id)
        .then((res)=> setmovie(res))
        
    })
    return (
        <>
            {movie
            ?
            <img src={ IMG_URL  + movie.backdrop_path} alt={movie.name}></img>
            :''
            }
            <h1 >Movie</h1>
             
            
        </>
    );
}

export default Movie;
