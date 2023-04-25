import './App.css';
import Login from "./components/Login";
import ShoeList from "./components/ShoeList"
import Home from "./components/Home.js";
import {BrowserRouter as Router, Route, Routes, Link, contextProvider} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import UserContext from "./context/UserContext";

const express = require("express");
const app = express();

const users = require("./routes/api/users");
app.use("./api/users", users);

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:8082/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:8082/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Routes>
          <Route exact path="/" 
            element={<Home login={false}/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/ShoeList" element={<ShoeList />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

