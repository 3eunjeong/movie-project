import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import "../Components/css/styles.css";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      runningTime
      rating
      poster
      summary
      isLiked @client
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  color: white;
`;

const Title = styled.h1`
  font-size: 38px;
  margin: 15px 0px;
`;

const Rating = styled.h3`
  font-size: 25px;
`;

const Subtitle = styled.h4`
  font-size: 25px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 20px;
  color: black;
  width: 100%;
`;

const Poster = styled.div`
  width: 260px;
  height: 380px;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  margin-bottom: 15px;
`;
export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <Container>
      <div className="movie-detail">
        <div className="column">
          <Title>
            {loading
              ? "Loading..."
              : `${data.movie.title} ${data.movie.isLiked ? "💖" : " "}`}
          </Title>
          {!loading && data.movie && (
            <>
              <Subtitle>
                {data.movie.runningTime}분 · {data.movie.genres}
              </Subtitle>
              <Rating>{data.movie.rating}</Rating>
            </>
          )}
        </div>
        <div className="column">
          <Poster bg={data && data.movie ? data.movie.poster : ""}></Poster>
          <div className="book" title="영화 예매하기" id="detail__book">
            예매
          </div>
        </div>
      </div>
      <div className="movie-info">
        {!loading && data.movie && (
          <>
            <Description>{data.movie.summary}</Description>
          </>
        )}
      </div>
      <div className="comment">
        <ul className="comment__list"></ul>
      </div>
    </Container>
  );
};
