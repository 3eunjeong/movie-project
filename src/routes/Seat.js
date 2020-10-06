import React, { useState } from "react";
import SeatPicker from "react-seat-picker";
import { HashRouter as Router, Link, useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import "../Components/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  const addSeatCallBackContinousCase = (
    { row, number, id },
    addCb,
    params,
    removeCb
  ) => {
    setLoading(
      {
        loading: true,
      },
      async () => {
        if (removeCb) {
          await new Promise((resolve) => setTimeout(resolve, 750));
          console.log(
            `Removed seat ${params.number}, row ${params.row}, id ${params.id}`
          );
          removeCb(params.row, params.number);
        }
        await new Promise((resolve) => setTimeout(resolve, 750));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        const newTooltip = `tooltip for id-${id} added by callback`;
        addCb(row, number, id, newTooltip);
        setLoading({ loading: false });
      }
    );
  };

  const removeSeatCallBack = ({ row, number, id }, removeCb) => {
    setLoading(
      {
        loading: true,
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
        removeCb(row, number, newTooltip);
        setLoading({ loading: false });
      }
    );
  };

  const rows = [
    [
      { id: 1, number: 1 },
      { id: 2, number: 2 },
      null,
      {
        id: 3,
        number: 3,
      },
      { id: 4, number: 4 },
      { id: 5, number: 5 },
      { id: 6, number: 6 },
      { id: 7, number: 7 },
      { id: 8, number: 8 },
      null,
      { id: 9, number: 9 },
      { id: 10, number: 10 },
    ],
    [
      { id: 11, number: 1 },
      { id: 12, number: 2 },
      null,
      {
        id: 13,
        number: 3,
      },
      { id: 14, number: 4 },
      { id: 15, number: 5 },
      { id: 16, number: 6 },
      { id: 17, number: 7 },
      { id: 18, number: 8 },
      null,
      { id: 19, number: 9 },
      { id: 20, number: 10 },
    ],
    [],
    [
      { id: 21, number: 1 },
      { id: 22, number: 2 },
      null,
      {
        id: 23,
        number: 3,
      },
      { id: 24, number: 4 },
      { id: 25, number: 5 },
      { id: 26, number: 6 },
      { id: 27, number: 7 },
      { id: 28, number: 8 },
      null,
      { id: 29, number: 9 },
      { id: 30, number: 10 },
    ],
    [
      { id: 31, number: 1 },
      { id: 32, number: 2 },
      null,
      {
        id: 33,
        number: 3,
      },
      { id: 34, number: 4 },
      { id: 35, number: 5 },
      { id: 36, number: 6 },
      { id: 37, number: 7 },
      { id: 38, number: 8 },
      null,
      { id: 39, number: 9 },
      { id: 40, number: 10 },
    ],
    [
      { id: 41, number: 1 },
      { id: 42, number: 2 },
      null,
      {
        id: 43,
        number: 3,
      },
      { id: 44, number: 4 },
      { id: 45, number: 5 },
      { id: 46, number: 6 },
      { id: 47, number: 7 },
      { id: 48, number: 8 },
      null,
      { id: 49, number: 9 },
      { id: 50, number: 10 },
    ],
    [
      { id: 51, number: 1 },
      { id: 52, number: 2 },
      null,
      {
        id: 53,
        number: 3,
      },
      { id: 54, number: 4 },
      { id: 55, number: 5 },
      { id: 56, number: 6 },
      { id: 57, number: 7 },
      { id: 58, number: 8 },
      null,
      { id: 59, number: 9 },
      { id: 60, number: 10 },
    ],
    [],
    [
      { id: 61, number: 1 },
      { id: 62, number: 2 },
      null,
      {
        id: 63,
        number: 3,
      },
      { id: 64, number: 4 },
      { id: 65, number: 5 },
      { id: 66, number: 6 },
      { id: 67, number: 7 },
      { id: 68, number: 8 },
      null,
      { id: 69, number: 9 },
      { id: 70, number: 10 },
    ],
    [
      { id: 71, number: 1 },
      { id: 72, number: 2 },
      null,
      {
        id: 73,
        number: 3,
      },
      { id: 74, number: 4 },
      { id: 75, number: 5 },
      { id: 76, number: 6 },
      { id: 77, number: 7 },
      { id: 78, number: 8 },
      null,
      { id: 79, number: 9 },
      { id: 80, number: 10 },
    ],
  ];

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
              예매 가능 인원: {availableNum}명
            </div>
          </div>
          <div className="seatLayout">
            <h2 className="seat__title">SCREEN</h2>
            <div className="seat__layout">
              <SeatPicker
                addSeatCallback={addSeatCallBackContinousCase}
                removeSeatCallback={removeSeatCallBack}
                rows={rows}
                maxReservableSeats={3}
                alpha
                visible
                selectedByDefault
                loading={loading}
                tooltipProps={{ multiline: true }}
                continuous
                setSelected={setSelected}
              />
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
