import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import "./css/styles.css";

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

const Container = styled.div`
  height: 400px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 7px;
  background-color: transparent;
  margin-bottom: 10px;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

export default ({ id, bg, isLiked }) => {
  const [toggleMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id), isLiked },
  });
  return (
    <Container>
      <Link to={`/movie/${id}`}>
        <Poster bg={bg} />
      </Link>
      <div className="btn-util">
        <button onClick={toggleMovie} className="movie__btnLike">
          {isLiked ? (
            <FontAwesomeIcon icon={faHeartSolid} color="#ff2239" />
          ) : (
            <FontAwesomeIcon icon={faHeartRegular} color="#ff2239" />
          )}
        </button>
        <div className="book" title="영화 예매하기">
          <Router>
            <Link to="/book">예매</Link>
          </Router>
        </div>
      </div>
    </Container>
  );
};
