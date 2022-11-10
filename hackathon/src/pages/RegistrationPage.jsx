import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import "../styles/index.css";
import { Button } from "@mui/material";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useAuth();

  return (
    <div
      style={{
        height: "100vh",
      }}>
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
          <Button
            variant="contained"
            id="register-btn"
            onClick={() => register(username, password)}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
