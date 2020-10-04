import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import "../Components/css/styles.css";
function Login() {
  return (
    <main>
      <form>
        <div class="form__header">
          <span class="form__title">기본정보</span>
          <span class="form__reset">입력 초기화</span>
        </div>

        <table className="join_table">
          <tr className="join_row">
            <th>
              아이디
              <img
                className="required-icon"
                src="https://img.echosting.cafe24.com/skin/base/common/ico_required.gif"
                alt="필수"
              />
            </th>
            <td>
              <input type="text" class="id" />
            </td>
          </tr>
          <tr className="join_row">
            <th>
              비밀번호
              <img
                className="required-icon"
                src="https://img.echosting.cafe24.com/skin/base/common/ico_required.gif"
                alt="필수"
              />
            </th>
            <td>
              <input type="password" class="pw1" />
            </td>
          </tr>
          <tr className="join_row">
            <th>
              비밀번호 확인
              <img
                className="required-icon"
                src="https://img.echosting.cafe24.com/skin/base/common/ico_required.gif"
                alt="필수"
              />
            </th>
            <td>
              <input type="password" class="pw2" />
            </td>
          </tr>
          <tr className="join_row">
            <th>
              이름
              <img
                className="required-icon"
                src="https://img.echosting.cafe24.com/skin/base/common/ico_required.gif"
                alt="필수"
              />
            </th>
            <td>
              <input type="text" class="name" />
            </td>
          </tr>
          <tr className="join_row">
            <th>주소</th>
            <td>
              <input type="text" id="address-post" />
              <button class="btn-post">우편번호</button>
              <br />
              <input type="text" id="address-basic" /> 기본주소 <br />
              <input type="text" id="address-detail" /> 나머지주소
              (선택입력가능)
            </td>
          </tr>
          <tr className="join_row">
            <th>
              휴대전화
              <img
                className="required-icon"
                src="https://img.echosting.cafe24.com/skin/base/common/ico_required.gif"
                alt="필수"
              />
            </th>
            <td>
              <select class="phone-number">
                <option>010</option>
                <option>011</option>
                <option>016</option>
                <option>017</option>
                <option>018</option>
                <option>019</option>
              </select>
              -
              <input type="text" class="phone" id="phone-middle" />
              -
              <input type="text" class="phone" id="phone-last" />
            </td>
          </tr>
          <tr className="join_row">
            <th>
              이메일
              <img
                className="required-icon"
                src="https://img.echosting.cafe24.com/skin/base/common/ico_required.gif"
                alt="필수"
              />
            </th>
            <td>
              <input type="text" id="email" />
            </td>
          </tr>
        </table>
        <div class="form__footer">
          <button class="form__submit">
            <Router>
              <Link to="/">회원가입</Link>
            </Router>
          </button>
        </div>
      </form>
    </main>
  );
}
export default Login;
