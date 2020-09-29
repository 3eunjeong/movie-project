import React from "react";
import { HashRouter as Router, Link, useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import "../Components/css/styles.css";

const GET_MOVIE_INFO = gql`
  {
    movies {
      id
      title
    }
  }
`;

const MovieList = styled.ul`
  margin-top: 10px;
  color: black;
`;

export default () => {
  const { id } = useParams();
  const { data } = useQuery(GET_MOVIE_INFO, {
    variables: { id: parseInt(id) },
  });

  return (
    <div>
      <h1>영화예매</h1>
      <div className="book_select select">
        <div className="select__option" id="movie">
          영화
          <MovieList>
            {data?.movies?.map((m) => (
              <h3 className="select__movieTitle">{m.title}</h3>
            ))}
          </MovieList>
        </div>
        <div className="select__option" id="theater">
          극장
        </div>
        <div className="select__option" id="time">
          날짜
        </div>
      </div>
    </div>
  );
};
