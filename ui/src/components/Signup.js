import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage({ error, setError, userAdded, setUserAdded }) {
  let usernameExists = false;
  let navigate = useNavigate();

  const [newUserData, setNewUserData] = useState({
    username: "",
    password: "",
    rePassword: "",
  });

  const cancelSignup = (e) => {
    setError(null);
    setUserAdded(null);
    navigate("/");
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    setError(null);
    signUpNewUser();
  };

  async function signUpNewUser() {
    if (newUserData.password !== newUserData.rePassword) {
      setError("Password doesn't match");
    } else if (
      newUserData.username &&
      newUserData.password === newUserData.rePassword
    ) {
      await checkUserExists();
      if (usernameExists === true) {
        setError("Username not available");
      } else {
        setError(null);
        addUser();
        setUserAdded("New user added");
      }
    } else {
      setError("wrong username password combination");
    }
  }

  async function checkUserExists() {
    await axios
      .get(`/server/users/${newUserData.username}`)
      .then((response) => {
        if (response.data.length > 0) {
          usernameExists = true;
        }
      });
  }

  const addUser = () => {
    axios.post("/server/adduser", newUserData).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="signup">
      <form id="signupform" autoComplete="off">
        {error !== "" ? <div className="error">{error}</div> : ""}
        {userAdded !== "" ? <div className="message">{userAdded}</div> : ""}
        <div className="loginTop">
          <h1>Signup</h1>
        </div>
        <input
          type="text"
          name="username"
          id="username"
          className="inputField"
          placeholder="ID"
          onChange={(e) =>
            setNewUserData({ ...newUserData, username: e.target.value })
          }
        />
        <input
          type="password"
          name="password"
          id="password"
          className="inputField"
          placeholder="password"
          onChange={(e) =>
            setNewUserData({ ...newUserData, password: e.target.value })
          }
        />
        <input
          type="password"
          name="rePassword"
          id="rePassword"
          className="inputField"
          placeholder="password confirm"
          onChange={(e) =>
            setNewUserData({ ...newUserData, rePassword: e.target.value })
          }
        />
        <input
          className="button2"
          type="button"
          value="Signup"
          onClick={(e) => signUpHandler(e)}
        />
        <input
          className="linkButton"
          type="button"
          value="Login"
          onClick={(e) => cancelSignup(e)}
        />
      </form>
    </div>
  );
}

export default SignupPage;
