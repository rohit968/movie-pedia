import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { upcoming } from "../../pages/endPoint";
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
      <div className="section">
        <div className="section-heading">Upcoming Movies</div>
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
