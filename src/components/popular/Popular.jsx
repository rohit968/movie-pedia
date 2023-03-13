import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPopular } from "../../pages/endPoint";
import MoreMovies from "../../pages/MoreMovies";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Card from "../card/Card";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const movies = async () => {
      const result = await fetchPopular();
      setPopularMovies(result);
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
          to={{ pathname: "/moremovies/popular" }}
          className="flex page-heading-link"
          style={{ justifyContent: "flex-start" }}
        >
          Popular <HiOutlineArrowSmRight />
        </Link>
      </h2>
      <div className="section-card-section">
        {popularMovies?.map((movie, index) => {
          return <Card movie={movie} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
