import React from "react";
import Carousel from "../components/carousel/Carousel";
import UpcomingMovies from "../components/upcomingmovies/UpcomingMovies";
import NowPlaying from "../components/nowplaying/NowPlaying";
import Toprated from "../components/toprated/Toprated";
import Popular from "../components/popular/Popular";

const Home = () => {
  return (
    <>
      <Carousel />
      <UpcomingMovies />
      <NowPlaying />
      <Toprated />
      <Popular />
    </>
  );
};

export default Home;
