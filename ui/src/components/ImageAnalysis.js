import React, { useState } from "react";
import Popup from "./Popup";
import left from "../icons/left.png";
import right from "../icons/right.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

function ImageAnalysis({ disease }) {
  let navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    name: disease,
    info: "질병에 대한 설명",
  });

  return (
    <div id="analysisMain">
      <h1>질병 확인</h1>
      <div id="analysisMid">
        <div className="imageDiv03">
          <img alt="img"></img>
          <p>원본데이터</p>
        </div>
        <div className="imageDiv03">
          <img alt="img"></img>
          <p>질병 위치 확인</p>
        </div>
        <div className="imageDiv03">
          <img alt="img"></img>
          <p>질병 종류 확인</p>
        </div>
      </div>
      <div className="buttons">
        <div id="arrowLeft">
          <img
            src={left}
            className="arrow"
            alt="left"
            onClick={() => navigate("/upload")}
          ></img>
        </div>
        <div id="arrowRight">
          <img
            src={right}
            className="arrow"
            alt="right"
            onClick={() => setPopup(true)}
          ></img>
        </div>
      </div>
      {popup && <Popup alertMessage={alertMessage} setPopup={setPopup} />}
    </div>
  );
}

export default ImageAnalysis;
