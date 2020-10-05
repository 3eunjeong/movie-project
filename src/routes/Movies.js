import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../Components/Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      poster
      isLiked @client
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px 25px;
  width: 100%;
  position: relative;
  top: 40px;
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      {loading && <Loading>Loading...</Loading>}
      <Movies>
        {data?.movies?.map((m) => (
          <Movie key={m.id} id={m.id} isLiked={m.isLiked} bg={m.poster} />
        ))}
      </Movies>
    </Container>
  );
};
