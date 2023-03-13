import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useLocation, useParams } from "react-router-dom";
import Card from "../components/card/Card";

const MoreMovies = () => {
  const { pagename } = useParams();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  console.log(movies);

  useEffect(() => {
    const results = async () => {
      const request = await axios.get(
        `movie/${pagename}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      );

      setMovies([...movies, ...request.data.results]);
    };
    results();
  }, [page]);

  const handleScroll = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="moremovies-section">
        {movies.map((movie, index) => {
          return <Card movie={movie} key={index} />;
        })}
      </div>
      <div className="moremovies-btn flex">
        <button
          onClick={() => handleScroll()}
          className="btn"
          style={{
            color: "var(--whitesmoke)",
            textTransform: "uppercase",
            border: "none",
            cursor: "pointer",
          }}
        >
          see more
        </button>
      </div>
    </>
  );
};

export default MoreMovies;
