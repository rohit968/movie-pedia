import React, { useEffect, useState } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import MoreMovies from "../../pages/MoreMovies";

import { fetchTopRated } from "../../pages/endPoint";
import Card from "../card/Card";
import { Link } from "react-router-dom";

const Toprated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const movies = async () => {
      const result = await fetchTopRated();
      setTopRatedMovies(result);
    };
    movies();
  }, []);

  return (
    <div className="section">
      <h2 className="section-heading">
        <Link
          to={{ pathname: "/moremovies/top_rated" }}
          className="flex page-heading-link"
          style={{ justifyContent: "flex-start" }}
        >
          Top Rated <HiOutlineArrowSmRight />
        </Link>
      </h2>

      <div className="section-card-section">
        {topRatedMovies?.map((movie, index) => {
          return <Card movie={movie} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Toprated;
