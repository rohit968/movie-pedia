/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import noImage from "../../assets/no-movie-image.webp";
import { IoBookmarkOutline, IoBookmark, IoStar } from "react-icons/io5";
import "./card.scss";

const Card = ({ movie }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigate = useNavigate();

  const bookmarkToggle = () => {
    setIsBookmarked((prev) => !isBookmarked);
  };

  const image = `https://image.tmdb.org/t/p/original${
    movie.backdrop_path || movie.poster_path
  }`;

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  console.log(image);

  return (
    <div className="card-container" onClick={() => handleClick(movie.id)}>
      <div className="card-image-contain">
        <img
          src={
            image !== "https://image.tmdb.org/t/p/originalundefined"
              ? image
              : noImage
          }
          alt="card-image"
          className="card-image"
        />
      </div>
      <div className="card-contents">
        <h3 className="card-title">
          {movie?.original_name || movie?.title || movie?.name}
        </h3>
      </div>
      <div className="bookmark-button" onClick={bookmarkToggle}>
        {isBookmarked ? (
          <IoBookmark className="bookmark-icon" />
        ) : (
          <IoBookmarkOutline className="bookmark-icon" />
        )}
      </div>
    </div>
  );
};

export default Card;
