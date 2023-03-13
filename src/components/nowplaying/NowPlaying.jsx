import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { nowPlaying } from "../../pages/endPoint";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Card from "../card/Card";

const NowPlaying = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    const movies = async () => {
      const result = await nowPlaying();
      setNowPlayingMovies(result);
    };
    movies();
  }, []);

  return (
    <div className="section">
      <h2
        className="section-heading flex"
        style={{ justifyContent: "flex-start" }}
      >
        <Link
          to={{ pathname: "/moremovies/now_playing" }}
          className="flex page-heading-link"
          style={{ justifyContent: "flex-start" }}
        >
          Now Playing <HiOutlineArrowSmRight />
        </Link>
      </h2>
      <div className="section-card-section">
        {nowPlayingMovies?.map((movie, index) => {
          return <Card movie={movie} key={index} />;
        })}
      </div>
    </div>
  );
};

export default NowPlaying;
