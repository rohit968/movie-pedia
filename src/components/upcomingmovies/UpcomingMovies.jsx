import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { upcoming } from "../../pages/endPoint";
import MoreMovies from "../../pages/MoreMovies";
import "./upcomingmovies.scss";

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const movies = async () => {
      const result = await upcoming();
      setUpcomingMovies(result);
    };
    movies();
  }, []);

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <div className="upcoming-section">
        <h2
          className="upcoming-section-heading flex"
          style={{ justifyContent: "flex-start" }}
        >
          <Link
            to={{ pathname: "/moremovies/upcoming" }}
            className="flex page-heading-link"
            style={{ justifyContent: "flex-start" }}
          >
            Upcoming Movies <HiOutlineArrowSmRight />
          </Link>
        </h2>
        <div className="card-contents">
          {upcomingMovies.map((movie) => (
            <>
              <div
                className="movie-card-container"
                onClick={() => handleClick(movie.id)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                  className="card-image"
                  alt="upcoming movies"
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovies;
