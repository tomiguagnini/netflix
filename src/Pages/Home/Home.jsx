import React from "react";
import './Home.css'
import Row from "../../Components/Row";
import { requests } from "../../requests/endpoints";




const Home = () => {
  
  
  return (
    <>
      <Row title="Trending" url={requests.fetchTrending} isLargeRow={true} />
      <Row title="Netflix Originals" url={requests.fetchNetflixOriginals} />
      <Row title="Actions Movies" url={requests.fetchActionMovies} />
      <Row title="Comedy Movies" url={requests.fetchComedyMovies} />
      <Row title="Horror Movies" url={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" url={requests.fetchRomanceMovies} />
      <Row title="Documentaries" url={requests.fetchDocumantaries} />
      
    </>
  );
};

export default Home;
