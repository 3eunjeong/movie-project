import React, { useState } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import "../Components/css/styles.css";
function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
    console.log(e.target.value);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(`${id}님, 로그인 되었습니다.`);
  };

  return (
    <div>
      <main>
        <div className="main__title">
          <h1>LOGIN</h1>
          <p>로그인 하시면 다양하고 특별한 혜택을 이용할 수 있습니다.</p>
        </div>
        <div className="main__content">
          <input
            type="text"
            className="login__id"
            placeholder="  아이디"
            value={id}
            onChange={onChangeId}
          />
          <input
            type="password"
            className="login__pw"
            placeholder="  비밀번호"
            value={pw}
            onChange={onChangePw}
          />
          <form className="login__id-save">
            <input
              type="checkbox"
              value="id-save"
              className="login__checkbox"
            />
            아이디 저장
          </form>
          <button
            className="login__btnLogin"
            title="로그인하기"
            onClick={handleSubmit}
          >
            <Router>
              <Link to="/">로그인</Link>
            </Router>
          </button>
        </div>

        <div className="find_info">
          <a target="_blank" id="idInquery">
            아이디 찾기
          </a>
          <span className="bar" aria-hidden="true">
            |
          </span>
          <a target="_blank" id="pwInquery">
            비밀번호 찾기
          </a>
          <span className="bar" aria-hidden="true">
            |
          </span>
          <a target="_blank" id="join">
            <Router>
              <Link to="/join">회원가입</Link>
            </Router>
          </a>
        </div>
      </main>
    </div>
  );
}
export default Login;
