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
          <li className="header__movie">
            <Router>
              <Link to="/movie">영화</Link>
            </Router>
          </li>
          <li className="header__timetable">
            <Router>
              <Link to="/book">예매</Link>
            </Router>
          </li>
          <li className="header__logo">
            <Router>
              <Link to="/">로고</Link>
            </Router>
          </li>
          <li className="header__theater">게시판</li>
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
