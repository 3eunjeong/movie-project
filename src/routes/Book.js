import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { setHours, setMinutes, addDays } from "date-fns";
import { HashRouter as Router, Link, useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import "../Components/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

const GET_MOVIE_INFO = gql`
  {
    movies {
      id
      title
    }
  }
`;

const MovieList = styled.div`
  margin-top: 10px;
  color: black;
`;

export default () => {
  const { id } = useParams();
  const { data } = useQuery(GET_MOVIE_INFO, {
    variables: { id: parseInt(id) },
  });
  const [startDate, setStartDate] = useState(new Date());
  const [province, setProvince] = useState("== 시/도 선택 ==");
  const [theater, setTheater] = useState("== 영화관 선택 ==");
  const [select__movieTitle, setTitleBg] = useState(id);

  const onChangeProvince = (e) => {
    setProvince(e.target.value);
    console.log(e.target.value);
  };

  const onChangeTheater = (e) => {
    setTheater(e.target.value);
    console.log(e.target.value);
  };

  const onChangeTitleBg = (e, id) => {
    e.preventDefault();
    if (id === select__movieTitle) {
      setTitleBg("");
    } else {
      setTitleBg(id);
      console.log(id);
    }
  };

  return (
    <div>
      <h1 className="bookTitle">영화예매</h1>
      <div className="book_select select">
        <div className="select__option" id="movie">
          <span className="select__optionLabel">영화</span>
          <MovieList>
            {data?.movies?.map((m) => (
              <h3
                className={
                  select__movieTitle === m.id
                    ? "select__movieTitleClicked"
                    : "select__movieTitleDefault"
                }
                onClick={(e) => onChangeTitleBg(e, m.id)}
              >
                {m.title}
              </h3>
            ))}
          </MovieList>
        </div>
        <div className="select__option" id="theater">
          <span className="select__optionLabel">극장</span>

          <div className="select__form">
            <form className="select__province">
              <select value={province} onChange={onChangeProvince}>
                <option value="seoul">서울</option>
                <option value="gyeonggi">경기</option>
                <option value="incheon">인천</option>
                <option value="daejeon">대전/충청/세종</option>
                <option value="busan">부산/대구/경상</option>
                <option value="gwangju">광주/전라</option>
                <option value="gangwon">강원</option>
                <option value="jeju">제주</option>
              </select>
            </form>
            <form className="select__theater">
              <select value={theater} onChange={onChangeTheater}>
                <option value="seoul theater">서울영화관</option>
                <option value="gyeonggi theater">경기영화관</option>
                <option value="incheon theater">인천영화관</option>
                <option value="daejeon theater">대전영화관</option>
                <option value="busan theater">부산영화관</option>
                <option value="gwangju theater">광주영화관</option>
                <option value="gangwon theater">강원영화관</option>
                <option value="jeju">제주영화관</option>
              </select>
            </form>
          </div>
        </div>
        <div className="select__option" id="time">
          <span className="select__optionLabel">날짜 / 시간</span>
          <DatePicker
            className="datePicker"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy.MM.dd (eee)"
            minDate={new Date()}
            maxDate={addDays(new Date(), 9)}
            placeholderText="날짜를 선택하세요"
            isClearable
          />
          <DatePicker
            className="timePicker"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Time"
            minTime={setHours(setMinutes(new Date(), 0), 17)}
            maxTime={setHours(setMinutes(new Date(), 30), 20)}
            dateFormat="h:mm aa"
            placeholderText="시간을 선택하세요"
            isClearable
          />
        </div>
      </div>
      <button className="btn-select" title="자리 선택하기">
        <Router>
          <Link to="/book/seat">자리 선택하기</Link>
        </Router>
      </button>
    </div>
  );
};
