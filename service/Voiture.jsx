import React from "react";
import "./Voi.css";
import heetch from "../assets/heetch.png";
import yassir from "../assets/yassir.png";
import indrive from "../assets/indrive.png";

function voiture(){
    return(
        <>
        <main className="mai">
        <h2 className="h">Voiture a Oran</h2>
        <p>In Oran, taxis are available in the city at any time. However, if you're in a rush, there are other options such as:</p>
        <ul className="cont">
            <li className="voiture-container">
                <img src={heetch} alt="heetch"/>
                <p className="voi-paragraph">
                <h2 className="voi-title">Heetch</h2>
                To order you own ride click here <a href="https://www.heetch.com/fr">Heetch.com</a>
                </p>
            </li>
            <li className="voiture-container">
                <img src={yassir} alt="yassir"/>
                <p className="voi-paragraph">
                <h2 className="voi-title">Yassir</h2>
                To order you own ride click here <a href="https://yassir.dz/en?utm_source=google_ads&utm_medium=t0&utm_campaign=searchads&gad_source=1&gclid=CjwKCAjw9cCyBhBzEiwAJTUWNb4gHHMGhF_H291X7RxXTjec2AmKAPtMikcq5ngLNzn8o5jG7UAcuBoCA_wQAvD_BwE">Yassir.dz</a></p></li>
                <li className="voiture-container">
                <img src={indrive} alt="indrive"/>
                <p className="voi-paragraph">
                <h2 className="voi-title">InDrive</h2>
                To order you own ride click here <a href="https://indrive.com/fr/home/">InDrive.com</a></p></li>
        </ul>
        </main>
        </>
    );
}
export default voiture;