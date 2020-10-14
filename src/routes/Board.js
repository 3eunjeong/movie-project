import React from "react";
import Slider from "react-slick";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../Components/Movie";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default () => {
  return (
    <>
      <h2>Board</h2>
      <table className="board_list">
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">말머리</th>
            <th scope="col">제목</th>
            <th scope="col">글쓴이</th>
            <th scope="col">조회</th>
            <th scope="col">추천</th>
          </tr>
        </thead>
      </table>
      <tbody></tbody>
    </>
  );
};
