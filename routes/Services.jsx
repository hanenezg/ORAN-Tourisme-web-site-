import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/nav";
import "./Services.css";
import autobus from "../assets/autobus.png";
import restaurant from "../assets/restaurant.png";
import hospital from "../assets/hospital.png";
import gaz from "../assets/icons8-station-essence-50.png";
import hotel from "../assets/icons8-hôtel-5-étoiles-50.png";
import bank from "../assets/icons8-banque-50.png";
import market from "../assets/icons8-boutique-en-ligne-50.png";

function Services() {
    return (
        <>
            <Navbar />
            <div className="box">
                <h1 className="description">This is our Services Page</h1>
                <h3>Here you can find information about:</h3>
            </div>
            <div className="card">
                <Link to="/transport" className="non">
                    <img src={autobus} alt="Transport" className="card-image" />
                    <h2 className="card-title">Transport</h2>
                </Link>
            </div>
            <div className="card">
                <img src={restaurant} alt="Restaurant" className="card-image" />
                <h2 className="card-title"><a href="https://www.google.com/maps/search/restaurants+/@35.7154688,-0.6171511,13z/data=!3m1!4b1?entry=ttu">Restaurant</a></h2>
            </div>
            <div className="card">
                <img src={hospital} alt="Hospitals" className="card-image" />
                <h2 className="card-title"><a href="https://www.google.com/maps/search/hospitals+and+clinics/@35.6906867,-0.6843163,11.98z?entry=ttu">Hospitals</a></h2>
            </div>
            <div className="card">
                <img src={gaz} alt="Gas Stations" className="card-image" />
                <h2 className="card-title"><a href="https://www.google.com/maps/search/gas+station/@35.6925166,-0.6996768,11.83z?entry=ttu">Gas Stations</a></h2>
            </div>
            <div className="card">
                <img src={market} alt="Markets" className="card-image" />
                <h2 className="card-title"><a href="https://www.google.com/maps/search/supermarket/@35.706471,-0.6229039,13z/data=!3m1!4b1?entry=ttu">Markets</a></h2>
            </div>
            <div className="card">
                <img src={hotel} alt="Hotels" className="card-image" />
                <h2 className="card-title"><a href="https://www.google.com/maps/search/hotels+a+oran/@35.706485,-0.6229038,13z/data=!3m1!4b1?entry=ttu">Hotels</a></h2>
            </div>
            <div className="card">
                <img src={bank} alt="Banks" className="card-image" />
                <h2 className="card-title"><a href="https://www.google.com/maps/search/banques+a+oran/@35.7065065,-0.5920038,15z/data=!3m1!4b1?entry=ttu">Banks</a></h2>
            </div>
        </>
    );
}

export default Services;
