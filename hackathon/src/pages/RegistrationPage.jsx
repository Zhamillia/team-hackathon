import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import "../styles/index.css";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useAuth();

  return (
    <div id="register-div">
      <div id="register-form">
        <h2 id="register-h2">Registration</h2>
        <input
          className="register-inp"
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br />
        <input
          className="register-inp"
          type="text"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <button id="register-btn" onClick={() => register(username, password)}>
          Register
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
