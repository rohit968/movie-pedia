import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useLocation } from "react-router-dom";
import Card from "../components/card/Card";

const Search = ({ input }) => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [page, setPages] = useState(2);

  const search = useLocation().search;
  const name = new URLSearchParams(search).get("q");

  useEffect(() => {
    const results = async () => {
      const request = await axios.get(
        `search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${name}&language=en-US&page=1`
      );
      setSearchMovies(request.data.results);
    };
    results();
  }, [input]);

  const getMoreMovie = async () => {
    const request = await axios.get(
      `search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${name}&language=en-US&page=${page}`
    );
    setSearchMovies([...searchMovies, ...request.data.results]);
    setPages(page + 1);
  };

  return (
    <div>
      <div className="moremovies-section">
        {searchMovies.map((movie, index) => {
          return <Card movie={movie} key={index} />;
        })}
      </div>
      <div className="moremovies-btn flex">
        <button
          onClick={() => getMoreMovie()}
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
    </div>
  );
};

export default Search;
