import '../Home.css';
import {Link, useLocation} from "react-router-dom";
import {React, useState, useEffect} from "react";

function Home({login}) {
    const [loginBtnText, setText] = useState("");

    useEffect(() => {
      if ({login}) {
        setText("Log Out");
      } else {
        setText("Log In");
      }
    }, [])

  return (
    <div className="App">
      <div className="innerBox">
        <div className="header">
          <div id="logo">
            <img id="ourImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Running_shoe_icon.png/640px-Running_shoe_icon.png"alt="shoes"/> 
          </div>
          <div id="topSection">
            <h2>Feet First</h2>
          </div>
          <div id="login">
            <Link
                className="loginPath"
                to="/Login">
                {loginBtnText}
            </Link>
          </div>
        </div>
        <div className="border">
          <a className="sections">Running</a>
          <a className="sections">Lifestyle</a>
          <a className="sections">Mens</a>
          <a className="sections">Womens</a>
          <a className="sections">Kids</a>
        </div>
        <div id="content">
          <div id ="collection">
            <p id="collectionTitle">Shop Summer Collection!!!</p>
            <img id="img" src="https://www.gannett-cdn.com/presto/2021/12/16/PSAT/965f9a4f-7367-41a4-9aff-0a6651beb3ff-IMG_0763.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"alt="shoes"/>
          </div>
          <div id="types">
            <div className="page"> 
              <img className="pics" src="https://www.brooksrunning.com/dw/image/v2/BGPF_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dw2e81d1c2/original/110376/110376-758-l-cascadia-16-mens-trail-running-shoe.png?sw=1388&sh=868&sm=cut" alt="running shoe"/>
              <Link
                style={{textDecoration: "none"}}
                className="title"
                to="/ShoeList">
                Running Shoes
            </Link>
            </div>
            <div className="page">
              <img id="force" src="https://www.pngarts.com/files/8/Nike-Air-Force-One-PNG-Transparent-Image.png" alt="running shoe"/>
              <p className="title">Lifestyle shoes</p>
            </div>
            <div className="page">
            <img id="bball" src="https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-PNG-Clipart.png" alt="basketball shoe"/>
              <p className="title">Basketball Shoes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

