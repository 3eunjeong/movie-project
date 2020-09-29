import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import "../Components/css/styles.css";
function Login() {
  return (
    <div>
      <main>
        <div class="main__title">
          <h1>LOGIN</h1>
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
          <button class="login__btnLogin" title="로그인하기">
            <Router>
              <Link to="/">로그인</Link>
            </Router>
          </button>
        </div>

        <div class="find_info">
          <a target="_blank" id="idInquery">
            아이디 찾기
          </a>
          <span class="bar" aria-hidden="true">
            |
          </span>
          <a target="_blank" id="pwInquery">
            비밀번호 찾기
          </a>
          <span class="bar" aria-hidden="true">
            |
          </span>
          <a target="_blank" id="join">
            <Router>
              <Link to="/join">회원가입</Link>
            </Router>
          </a>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
export default Login;
