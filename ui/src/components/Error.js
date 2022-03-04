import React from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  let navigate = useNavigate();

  return (
    <div className="error">
      <h2>ERROR!</h2>
      <h1>PAGE NOT FOUND</h1>
      <p>Site you are looking for doesn't exist</p>
      <button onClick={() => navigate("/")}>HOME</button>
    </div>
  );
}

export default Error;
