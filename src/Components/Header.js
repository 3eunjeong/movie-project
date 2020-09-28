import React from "react";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";
import "./css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div>
      <header>
        <ul className="header__list" id="right">
          <li className="header__login">
            <Router>
              <Link to="/login">로그인</Link>
            </Router>
          </li>
          <li className="header__signin">
            <a href="signin.html">회원가입</a>
          </li>
        </ul>
        <ul className="header__list">
          <li className="header__movie">영화</li>
          <li className="header__timetable">상영시간표</li>
          <li className="header__logo">
            <a href="index.html">로고</a>
          </li>
          <li className="header__theater">극장선택</li>
          <li className="header__search">
            <FontAwesomeIcon icon={faSearch} />
          </li>
          <li className="header__user">
            <FontAwesomeIcon icon={faUser} />
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
