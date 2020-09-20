import React from "react";
import "./css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div>
      <header>
        <ul className="header__list" id="right">
          <ul className="header__login">
            <a href="Login.js">로그인</a>
          </ul>
          <ul className="header__signin">
            <a href="signin.html">회원가입</a>
          </ul>
        </ul>
        <ul className="header__list">
          <ul className="header__movie">영화</ul>
          <ul className="header__timetable">상영시간표</ul>
          <ul className="header__logo">
            <a href="index.html">로고</a>
          </ul>
          <ul className="header__theater">극장선택</ul>
          <ul className="header__search">
            <FontAwesomeIcon icon={faSearch} />
          </ul>
          <ul className="header__user">
            <FontAwesomeIcon icon={faUser} />
          </ul>
        </ul>
      </header>
    </div>
  );
}

export default Header;
