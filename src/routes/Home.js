import React from "react";
import Slider from "react-slick";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../Components/Movie";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GET_MOVIES = gql`
  {
    movies {
      id
      poster
      isLiked @client
    }
  }
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Wrap = styled.div`
  margin: 3% 0;
  width: 100%;
  .slick-prev:before {
    opaicty: 1;
    color: black;
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }
`;

const Contents = styled.div`
  height: 10%;
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  return (
    <Wrap>
      {loading && <Loading>Loading...</Loading>}
      <Slider {...settings}>
        {data?.movies?.map((m) => (
          <Contents>
            <Movie key={m.id} id={m.id} isLiked={m.isLiked} bg={m.poster} />
          </Contents>
        ))}
      </Slider>
    </Wrap>
  );
};
