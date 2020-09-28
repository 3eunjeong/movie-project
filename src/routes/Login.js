import React from "react";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import Home from "./Home";
import "../Components/css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
function Login() {
  return (
    <div>
      <main>
        <div class="main__title">
          <h3>LOGIN</h3>
          <p>로그인 하시면 다양하고 특별한 혜택을 이용할 수 있습니다.</p>
        </div>
        <div class="main__content">
          <input type="text" class="login__id" placeholder="  아이디" />
          <input type="password" class="login__pw" placeholder="  비밀번호" />
          <div class="login__id-save">
            <label>
              <input type="checkbox" value="id-save" class="login__checkbox" />{" "}
              아이디 저장
            </label>
          </div>
        </div>
        <div class="main__button">
          <button class="login__btnLogin">
            <a href="index.html">로그인</a>
          </button>
          <button class="login__btnSign">
            <a href="signin.html">회원가입</a>
          </button>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
export default Login;
