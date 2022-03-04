import React from "react";
import adpet_icon_01 from "../icons/adpet_icon_01.png";
import left from "../icons/left.png";
import right from "../icons/right.png";
import { useNavigate } from "react-router-dom";

function Result() {
  let navigate = useNavigate();

  return (
    <div id="resultMain">
      <h1>질병 해결방안</h1>
      <form id="resultFormTop">
        <select>
          <option>관리 방법</option>
          <option>option</option>
        </select>
      </form>
      <div id="resultIconDiv">
        <img src={adpet_icon_01} alt="adpet_icon_01" id="adpet_icon_01"></img>
      </div>
      <table id="resultTable">
        <tbody>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <div className="buttons">
        <div id="arrowLeft">
          <img
            src={left}
            className="arrow"
            alt="left"
            onClick={() => navigate("/analysis")}
          ></img>
        </div>
        <div id="arrowRight">
          <img
            src={right}
            className="arrow"
            alt="right"
            onClick={() => navigate("/mapview")}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Result;
