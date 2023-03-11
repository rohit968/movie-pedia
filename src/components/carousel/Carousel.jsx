import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../pages/endPoint";
import Banner from "../banner/Banner";
import Slider from "react-slick";
import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const settings = {
    fade: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 20,
    width: 0,
  };

  useEffect(() => {
    const resultMovies = async () => {
      const result = await fetchMovies();
      setTrendingMovies(result);
    };
    resultMovies();
  }, []);

  return (
    <Slider {...settings} className="slider">
      {trendingMovies?.map((movie, index) => (
        <Banner movies={movie} key={index} />
      ))}
    </Slider>
  );
};

export default Carousel;
