
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  return (
    <div id="log-div">
      <div id="log-form">
        <h2 id="log-h2">Log In</h2>

        <input
          className="log-inp"
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          className="log-inp"
          type="text"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button id="log-btn" onClick={() => login(username, password)}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
