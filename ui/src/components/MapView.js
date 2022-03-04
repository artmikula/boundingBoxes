import React from "react";
import Map from "./Map";
import left from "../icons/left.png";
import { useNavigate } from "react-router-dom";

function MapView() {
  let navigate = useNavigate();
  return (
    <div id="MapViewMain">
      <h1>질병 해결방안</h1>
      <form id="resultFormTop">
        <select>
          <option>관리 방법</option>
          <option>option</option>
        </select>
      </form>
      <div id="mapMiddle">
        <Map />
        <table id="smallTable">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>2</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="buttons">
        <div id="arrowLeft">
          <img
            src={left}
            className="arrow"
            alt="left"
            onClick={() => navigate("/analysis")}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default MapView;
