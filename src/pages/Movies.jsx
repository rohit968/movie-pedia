import React from "react";
import NowPlaying from "../components/nowplaying/NowPlaying";
import Popular from "../components/popular/Popular";
import Toprated from "../components/toprated/Toprated";

const Movies = () => {
  return (
    <div className="main-movies-page-container">
      <NowPlaying />
      <Toprated />
      <Popular />
    </div>
  );
};

export default Movies;
