import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
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
            <Router>
              <Link to="/join">회원가입</Link>
            </Router>
          </li>
        </ul>
        <ul className="header__list">
          <li className="header__movie">영화</li>
          <li className="header__timetable">상영시간표</li>
          <li className="header__logo">
            <Router>
              <Link to="/">로고</Link>
            </Router>
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
