import React from "react";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import "./banner.scss";

const Carousel = ({ movies }) => {
  const image = `https://image.tmdb.org/t/p/original${
    movies.backdrop_path || movies.poster_path
  }`;

  return (
    <>
      <div className="banner-container">
        <div
          className="banner flex"
          style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
            backgroundPosition: "center cover",
          }}
        >
          <div className="banner-contents flex">
            <div className="banner-movie-name">
              {movies?.title || movies?.name || movies?.original_name}
            </div>{" "}
            <p className="banner-movie-type">
              {movies.media_type} | {movies.popularity}
            </p>
            <div className="banner-buttons">
              <div className="btn wishlist-button">
                <HiOutlinePlusSmall />
                Watchlist
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
