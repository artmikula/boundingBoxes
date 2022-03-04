import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import user_icon from "../icons/user.png";

function Login({ error, setError, setUserAuth, userAdded, setUserAdded }) {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  let navigate = useNavigate();

  const signUpUser = (e) => {
    e.preventDefault();
    setError(null);
    navigate("/signup");
  };

  const loginHandler = (e) => {
    e.preventDefault();
    loginUser();
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      loginUser();
    }
  };

  //verifying hashed password
  async function loginUser() {
    setError("");
    if (loginInfo.password && loginInfo.username) {
      await axios.post("/server/verify", loginInfo).then((response) => {
        if (response.data === true) {
          setUserAuth(true);
          setUserAdded(null);
          setError(null);
          navigate("/upload");
        } else {
          setError("Wrong password");
        }
      });
    } else {
      setError("Enter username and password");
    }
  }

  return (
    <div className="login">
      <form id="loginform" autoComplete="off">
        {error !== "" ? <div className="error">{error}</div> : ""}
        {userAdded !== "" ? <div className="message">{userAdded}</div> : ""}
        <div className="loginTop">
          <h1>Login</h1>
        </div>
        <div id="loginDiv02">
          <div className="usernameDiv">
            <div id="userIconCircle">
              <img src={user_icon} id="user_icon" alt="user_icon"></img>
            </div>
            <input
              type="text"
              name="username"
              className="inputField"
              id="username"
              placeholder="ID"
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, username: e.target.value })
              }
            />
          </div>
          <input
            type="password"
            name="password"
            className="inputField"
            id="password"
            placeholder="Password"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
            onKeyUp={(e) => handleKeypress(e)}
          />
        </div>
        <input
          className="button2"
          type="button"
          value="Login"
          onClick={(e) => loginHandler(e)}
        />
        <input
          className="linkButton"
          type="button"
          value="Signup"
          onClick={(e) => signUpUser(e)}
        />
      </form>
    </div>
  );
}

export default Login;
