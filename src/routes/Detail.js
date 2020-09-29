import React from "react";
import { HashRouter as Router, Link, useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import "../Components/css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      engTitle
      openDate
      director
      genres
      rating
      actors
      runningTime
      summary
      poster
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
  font-size: 35px;
  margin: 15px 0px;
`;

const EngTitle = styled.h2`
  font-size: 23px;
  margin: 15px 0px;
`;

const Rating = styled.h3`
  margin-top: 230px;
  font-size: 22px;
`;

const OpenDate = styled.h3`
  margin-top: 100px;
  margin-bottom: 5px;
  font-size: 15px;
  color: black;
`;

const Subtitle = styled.h4`
  font-size: 23px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  color: black;
  width: 100%;
  word-break: keep-all;
`;
const Director = styled.h3`
  margin-bottom: 5px;
  font-size: 15px;
  color: black;
`;

const Actors = styled.h3`
  font-size: 15px;
  color: black;
`;

const Poster = styled.div`
  width: 260px;
  height: 350px;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const CommentLabel = styled.div`
  font-size: 17px;
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

          <EngTitle>{data?.movie?.engTitle}</EngTitle>

          <Subtitle>
            {data?.movie?.runningTime}분 · {data?.movie?.genres}
          </Subtitle>
          <Rating>{data?.movie?.rating}</Rating>
        </div>
        <div className="column">
          <Poster bg={data?.movie?.poster}></Poster>
          <div className="book" title="영화 예매하기" id="detail__book">
            <Router>
              <Link to="/book">예매</Link>
            </Router>
          </div>
        </div>
      </div>
      <div className="movie-info">
        <Description>{data?.movie?.summary}</Description>
        <OpenDate>개봉일: {data?.movie?.openDate}</OpenDate>
        <Director>감독: {data?.movie?.director}</Director>
        <Actors>출연진: {data?.movie?.actors}</Actors>
      </div>
      <div className="comments">
        <CommentLabel>{data?.movie?.title}에 대해 얘기해주세요.</CommentLabel>

        <ul className="comments__list">
          <div className="comments__column" id="comments__user">
            <FontAwesomeIcon icon={faUsers} size="2x" className="user-icon" />
            <div className="comments__username">유저네임</div>
          </div>
          <div className="comments__column">
            <textarea rows="5" cols="100" name="comment"></textarea>
            <div className="comments__btnSubmit">등록</div>
          </div>
        </ul>
      </div>
    </Container>
  );
};
