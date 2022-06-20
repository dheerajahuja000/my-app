import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import Info from "./components/Info"
import Footer from "./components/Footer"
import About from "./components/About"

function Profile(){
  return(
    <div className="card">
      <Info></Info>
       <About></About>
      <Footer></Footer>
    </div>
    
  )
}

ReactDOM.render(<Profile/>, document.getElementById("root"));
