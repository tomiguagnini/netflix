import React from "react";
import './Home.css'
import Row from "../../Components/Row";
import { requests } from "../../requests/endpoints";
import Banner from "../../Components/Banner";




const Home = () => {
  
  


  return (
    <>
      <Banner></Banner>
      <div className="container">
          <Row title="Netflix Originals" url={requests.fetchNetflixOriginals}isLargeRow={true} />
          <Row title="Trending" url={requests.fetchTrending}  />
          <Row title="Actions Movies" url={requests.fetchActionMovies} />
          <Row title="Comedy Movies" url={requests.fetchComedyMovies} />
          <Row title="Horror Movies" url={requests.fetchHorrorMovies} />
          <Row title="Romance Movies" url={requests.fetchRomanceMovies} />
          <Row title="Documentaries" url={requests.fetchDocumantaries} />
          

      </div>
    </>
  );
};

export default Home;
