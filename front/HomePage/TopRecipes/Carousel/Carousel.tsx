import * as React from 'react';
import Slider from 'react-slick';
import { RecipesCard } from '../RecipesCard/RecipesCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

export const Carousel: React.FunctionComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const recipesArr = [1, 2, 3, 4, 5, 6, 7, 8];
  const recipesCard = recipesArr.map((e, i) => {
    return <RecipesCard key={i} />;
  });
  return <Slider {...settings}>{recipesCard}</Slider>;
};
