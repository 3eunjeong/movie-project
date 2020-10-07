import React, { useState, useEffect } from "react";
import { HashRouter as Router, Link, useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import "../Components/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MovieSeatPicker from "../Components/MovieSeatPicker";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      openDate
      rating
      runningTime
      poster
    }
  }
`;

export default () => {
  const [adultNum, setAdultNum] = useState(0);
  const [teenNum, setTeenNum] = useState(0);
  const [specialNum, setSpecialNum] = useState(0);
  const availableNum = adultNum + teenNum + specialNum;
  const [selected, setSelected] = React.useState(null);

  return (
    <div>
      <h1 className="bookTitle">영화예매</h1>
      <main className="seat-main">
        <section className="seat_select">
          <h2 className="seatTitle"> 관람인원 선택(최대 8매 선택 가능)</h2>
          <div className="seat-count">
            <div className="seatCount__column">
              <p className="txt">성인</p>
              <div className="seat__btnCount">
                <button
                  type="button"
                  className="btnDown"
                  title="성인 좌석 선택 감소"
                  onClick={() => setAdultNum(adultNum - 1)}
                >
                  -
                </button>
                <div className="seat-num">{adultNum}</div>
                <button
                  type="button"
                  className="btnUp"
                  title="성인 좌석 선택 증가"
                  onClick={() => setAdultNum(adultNum + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="seatCount__column">
              <p className="txt">청소년</p>
              <div className="seat__btnCount">
                <button
                  type="button"
                  className="btnDown"
                  title="청소년 좌석 선택 감소"
                  onClick={() => setTeenNum(teenNum - 1)}
                >
                  -
                </button>
                <div className="seat-num">{teenNum}</div>
                <button
                  type="button"
                  className="btnUp"
                  title="청소년 좌석 선택 증가"
                  onClick={() => setTeenNum(teenNum + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="seatCount__column">
              <p className="txt">우대</p>
              <div className="seat__btnCount">
                <button
                  type="button"
                  className="btnDown"
                  title="우대 좌석 선택 감소"
                  onClick={() => setSpecialNum(specialNum - 1)}
                >
                  -
                </button>
                <div className="seat-num">{specialNum}</div>
                <button
                  type="button"
                  className="btnUp"
                  title="우대 좌석 선택 증가"
                  onClick={() => setSpecialNum(specialNum + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="seatCount__column">
              <h2 className="seat-availableNum">
                예매 가능 인원: {availableNum}명
              </h2>
            </div>
          </div>
          <div className="seatLayout">
            <h2 className="seat__title">SCREEN</h2>
            <div className="seat__layout">
              <MovieSeatPicker setSelected={setSelected} />
            </div>
          </div>
        </section>
        <div className="seat-result"></div>
      </main>
      <div className="select-phase">
        <button className="btn-arrowLeft" title="이전 단계로 넘어가기">
          <FontAwesomeIcon icon={faArrowLeft} />
          <Router>
            <Link to="/book"> 이전 단계로 넘어가기</Link>
          </Router>
        </button>
        <button className="btn-arrowRight" title="다음 단계로 넘어가기">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};
