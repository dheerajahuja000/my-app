import React from "react";
import picture from "../images/Dheeraj1.jpg"

export default function Info(){
    return(
        <div className="info">
            <img src={picture} alt="Dheeraj" class="card-image" />
            <h1 className="div-info">Dheeraj Ahuja</h1>
            <h4>Frontend Developer</h4>
            <h5>dheerajahuja000</h5>
            <button type="button" title="Email"><i class="fa fa-home"></i> Email</button>
            <button type="button" title="Linkedin"><i class="fa fa-home"></i>Linkedin</button>
        </div>
    )
}