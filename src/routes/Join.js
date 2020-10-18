import React, { useState, useEffect } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import AddressModal from "../Components/AddressModal";
import useModal from "../Components/useModal";
import "../Components/css/styles.css";

function Join() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/registor/members')
    .then(response => response.text())
    .then(message => {
    setMessage(message);
    });
    },[])

  const { isShowing, toggle } = useModal();
  const [joinInfo, setJoinInfo] = useState({
    id: "",
    pw1: "",
    pw2: "",
    username: "",
    zipCode: "",
    basicAddress: "",
    detailAddress: "",
    firstNum: "",
    middleNum: "",
    lastNum: "",
    email: "",
  });
  const {
    id,
    pw1,
    pw2,
    username,
    zipCode,
    basicAddress,
    detailAddress,
    firstNum,
    middleNum,
    lastNum,
    email,
  } = joinInfo;

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setJoinInfo({ ...joinInfo, [name]: value });
  };

  const onReset = () => {
    setJoinInfo({
      id: "",
      pw1: "",
      pw2: "",
      username: "",
      zipCode: "",
      basicAddress: "",
      detailAddress: "",
      firstNum: "",
      middleNum: "",
      lastNum: "",
      email: "",
    });
  };

  return (
    <main>
      <form>
        <div className="form__header">
          <span className="form__title">기본정보</span>
          <span className="form__reset" onClick={onReset}>
            입력 초기화
          </span>
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
              <input
                type="text"
                name="id"
                className="id"
                value={id}
                onChange={onChangeInput}
              />
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
              <input
                type="password"
                name="pw1"
                className="pw1"
                value={pw1}
                onChange={onChangeInput}
              />
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
              <input
                type="password"
                name="pw2"
                className="pw2"
                value={pw2}
                onChange={onChangeInput}
              />
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
              <input
                type="text"
                name="username"
                className="name"
                value={username}
                onChange={onChangeInput}
              />
            </td>
          </tr>
          <tr className="join_row">
            <th>주소</th>
            <td>
              <input
                type="text"
                id="address-post"
                name="zipCode"
                className="zioCode"
                value={zipCode}
                onChange={onChangeInput}
              />
              <button className="btn-post" onClick={toggle}>
                우편번호
              </button>
              <img
                className="required-icon"
                src="https://img.echosting.cafe24.com/skin/base/common/ico_required.gif"
                alt="필수"
              />
              <AddressModal isShowing={isShowing} hide={toggle} />
              <br />
              <input
                type="text"
                id="address-basic"
                name="basicAddress"
                value={basicAddress}
                onChange={onChangeInput}
              />{" "}
              기본주소{" "}
              <img
                className="required-icon"
                src="https://img.echosting.cafe24.com/skin/base/common/ico_required.gif"
                alt="필수"
              />
              <br />
              <input
                type="text"
                id="address-detail"
                name="detailAddress"
                value={detailAddress}
                onChange={onChangeInput}
              />{" "}
              나머지주소 (선택입력가능)
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
              <select
                className="phone-number"
                name="firstNum"
                value={firstNum}
                onChange={onChangeInput}
              >
                <option>010</option>
                <option>011</option>
                <option>016</option>
                <option>017</option>
                <option>018</option>
                <option>019</option>
              </select>
              -
              <input
                type="text"
                className="phone"
                id="phone-middle"
                name="middleNum"
                value={middleNum}
                onChange={onChangeInput}
              />
              -
              <input
                type="text"
                className="phone"
                id="phone-last"
                name="lastNum"
                value={lastNum}
                onChange={onChangeInput}
              />
            </td>
          </tr>
          <tr className="join_row">
            <th>이메일</th>
            <td>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={onChangeInput}
              />
            </td>
          </tr>
        </table>
        <div className="form__footer">
          <button class="form__submit">
            <Router>
              <Link to="/">회원가입</Link>
            </Router>
          </button>
        </div>
      </form>

      <h1 className="App-title">{message}</h1>

<p className="App-intro">
To get started, edit <code>src/Join.js</code> and save to reload.
</p>
    </main>
  );
}
export default Join;
