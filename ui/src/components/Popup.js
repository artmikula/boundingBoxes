import React from "react";
import { useNavigate } from "react-router-dom";

export default function Popup({ alertMessage, setPopup }) {
  let navigate = useNavigate();

  return (
    <div className="popup-box">
      <div className="box">
        <p>질병 이름</p>
        <h4>{alertMessage.name}</h4>
        <p>설명</p>
        <h4>{alertMessage.info}</h4>
        <div id="analysisMid02">
          <div className="imageDiv04">
            <img className="popupSmall" alt="img"></img>
          </div>
          <div className="imageDiv04">
            <img className="popupSmall" alt="img"></img>
          </div>
        </div>
        <div id="blueLine"></div>
        <div className="buttons04">
          <button
            className="button4"
            id="greyButton"
            onClick={() => setPopup(null)}
          >
            돌아가기
          </button>
          <button
            className="button4"
            id="lightBlueButton"
            onClick={() => navigate("/result")}
          >
            해결방법 확인
          </button>
        </div>
      </div>
    </div>
  );
}
