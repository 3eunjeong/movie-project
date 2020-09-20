import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

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
  padding: 30px;
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 20px;
  width: 50%;
`;

const Poster = styled.div`
  width: 70%;
  height: 100%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <Container>
      <Column>
        <Title>
          {loading
            ? "Loading..."
            : `${data.movie.title} ${data.movie.isLiked ? "💖" : " "}`}
        </Title>
        {!loading && data.movie && (
          <>
            <Subtitle>
              {data.movie.runningTime}분 · {data.movie.rating}
            </Subtitle>
            <Description>{data.movie.summary} </Description>
          </>
        )}
      </Column>
      <Poster bg={data && data.movie ? data.movie.poster : ""}></Poster>
    </Container>
  );
};
