import React from "react";
import { useNavigate } from "react-router-dom";
import adpet_logo from "../icons/adpet_logo.png";

function Navbar({ userAuth, setUserAuth }) {
  let navigate = useNavigate();

  const logout = () => {
    setUserAuth(false);
    navigate("/");
  };

  return (
    <nav>
      <div id="navLeft">
        <div id="adpet_logo_div">
          <img src={adpet_logo} id="adpet_logo" alt="adpet_logo"></img>
        </div>
      </div>
      <div id="navRight">
        {userAuth && (
          <button className="smallBtn" onClick={() => logout()}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
