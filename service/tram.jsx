import React from "react";
import "./tram.css";
import tram1 from "../assets/tram.jpg";
import plan from "../assets/plan.png";

function Tram() {
    const handleImageClick = (event) => {
        const img = event.target;
        if (img.classList.contains("zoom-in")) {
            img.classList.remove("zoom-in");
        } else {
            img.classList.add("zoom-in");
        }
    };
    return(
        <div className="tram-container">
            <img src={tram1} alt="tram" className="tram-image" />
            <p className="tram-paragraph">
                <h2 className="tram-title">Tramway d'Oran</h2>
                Horaires de service : De 07h00 à 00h00 <br />
                Service Clients : 041 72 07 85 <br />
                Longueur du réseau : 18.7 Km
                for more informations visite the official website <a href="https://www.setram.dz/"> setram.dz</a> 
            </p>
            <img src={plan} alt="plan" className="tram-image" onClick={handleImageClick}/>
        </div>
    );
}

export default Tram;
