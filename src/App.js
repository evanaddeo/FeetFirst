import './App.css';
import Login from "./components/Login";
import ShoeList from "./components/ShoeList"
import Home from "./components/Home.js";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" 
            element={<Home login={false}/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/ShoeList" element={<ShoeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

