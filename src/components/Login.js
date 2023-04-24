import "../Login.css";
import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="main">
          <div className="innerBox2">
            <div id="mainBox">
              <h3> Feet First</h3>
              <form>
                  <input type="text" 
                      name="name" 
                      className="inputBox"
                      placeholder="Username"/>
              </form>
              <form>
                  <input type="password" 
                      name="name" 
                      className="inputBox"
                      placeholder="Password"/>
              </form>
              <Link
                className="linky"
                to="/"
                login={false}>
                Submit
              </Link>
              <img id="bottomImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Running_shoe_icon.png/640px-Running_shoe_icon.png"alt="shoes"/>
            </div>
          </div>
        </div>
      );
}

export default Login;