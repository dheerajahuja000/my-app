import React from "react";
import fb from "../images/fb.png"
import insta from "../images/insta.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"

export default function Info(){
    return(
        <footer className="footer">
           <img src={fb}/>
           <img src={twitter}/>
           <img src={linkedin}/>
           <img src={insta}/>
         </footer>
    )
}