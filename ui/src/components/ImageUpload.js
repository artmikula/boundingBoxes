import React, { useState, useEffect } from "react";
import left from "../icons/left.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ImageUpload({ disease, setDisease }) {
  let navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [bBoxes, setBBoxes] = useState(null);
  const [apiLoaded, setApiLoaded] = useState(false);
  const [boxDivs, setBoxDivs] = useState(null);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    setApiLoaded(false);
    setDisease(null);

    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  let divs = [];

  console.log(divs);

  useEffect(() => {
    if (bBoxes !== null) {
      console.log(bBoxes);
      setDisease(bBoxes.data[0].label.slice(4, -5));

      for (let i = 0; i < bBoxes.data.length; i++) {
        let left_val = parseInt(bBoxes.data[i].start_x);
        let top_val = parseInt(bBoxes.data[i].start_y);
        let width_val = parseInt(bBoxes.data[i].end_x - bBoxes.data[i].start_x);
        let height_val = parseInt(
          bBoxes.data[i].end_y - bBoxes.data[i].start_y,
        );

        divs.push({
          left: left_val,
          width: width_val,
          top: top_val,
          height: height_val,
        });
      }
      setApiLoaded(true);
      setBoxDivs(divs);
      console.log(disease);
    }
  }, [bBoxes]);

  console.log(boxDivs);

  const createItem = async () => {
    console.log("PHOTO:", selectedFile);
    const formData = new FormData();
    formData.append("file_name", selectedFile);
    try {
      const response = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/adpet/",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      // console.log(response.data[0].start_x);
      if (response.data.length > 0) {
        setBBoxes(response);
      } else {
        console.log("Reseting Bonding Boxes");
        setBBoxes(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="uploadMain">
      <h1>반려동물 이미지 넣기</h1>
      {!disease ? <h1>이상 없음</h1> : <h1>이상 감지됨: {disease}</h1>}
      <div className="uploadMid">
        <div id="uploadImg">
          <div id="uploadedImage">
            {selectedFile && (
              <Zoom>
                <img src={preview}></img>
                {apiLoaded &&
                  boxDivs.map((item, i) => (
                    <div key={i} className="bBoxDiv" style={item}></div>
                  ))}
              </Zoom>
            )}
          </div>
        </div>
        <label
          className="custom-file-upload"
          onChange={onSelectFile}
          id="file-upload"
        >
          <input type="file" />
          이미지 삽입
        </label>
      </div>
      <div id="uploadFooter">
        <button className="button2" onClick={() => createItem()}>
          결과 확인
        </button>
        {disease && (
          <button className="button2" onClick={() => navigate("/analysis")}>
            추가 정보
          </button>
        )}
      </div>
      <div className="buttons">
        <div id="arrowLeft">
          <img
            src={left}
            className="arrow"
            alt="left"
            onClick={() => navigate("/")}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
