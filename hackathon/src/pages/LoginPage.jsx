import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { Button } from "@mui/material";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  return (
    <div
      style={{
        height: "100vh",
      }}>
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

          <Button
            variant="contained"
            id="log-btn"
            onClick={() => login(username, password)}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
