import React, { useState } from "react";
import ReactDOM from "react-dom";
import DaumPostCode from "react-daum-postcode";
import "./css/styles.css";

// const [zoneCode, setZoneCode] = useState("");
// const [fullAddress, setFullAddress] = useState("");

const handleAddress = (data) => {
  let allAddress = data.address;
  let extraAddress = "";
  let zoneCodes = data.zonecode;

  if (data.addressType === "R") {
    if (data.bname !== "") {
      extraAddress += data.bname;
    }
    if (data.buildingName !== "") {
      extraAddress +=
        extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
    }
    allAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
  }

  console.log(allAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  // setZoneCode(zoneCodes);
  // setFullAddress(allAddress);
};

const AddressModal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p>도로명 주소를 선택해주세요.</p>
              <DaumPostCode onComplete={handleAddress} />
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default AddressModal;
