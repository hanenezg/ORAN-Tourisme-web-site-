import React from "react";
import Navbar from "./nav";
import "./Acceuil.css";
import image from "../assets/Oran.jpg";
import image1 from "../assets/image1.png";
import lion2 from "../assets/lion2.jpg";

function Acceuil() {
    return (
        <>
            <Navbar />
            <div>
                <img className="cover" src={image} alt="HerpImg" />
            </div>
            <div className="text">
                <h1>Your Journey Your Story</h1>
            </div>
            <div className="hist">
            <div className="historique">
                <img className="cover1" src={lion2} alt="HerpImg" />
                <h1>Why is it named Oran ?</h1>
                <p>the name Oran comes from the Arabic word "wahran", which means "lion". This interpretation is based on the fact that Oran is located in a region that was once home to lions.
                Another possibility is that the name Oran comes from the Amazigh language, which is spoken by indigenous North African groups. The Amazigh word "aharan" means "lions"
                </p>
            </div>
            <div className="historique">
                <img className="cover1" src={image1} alt="HerpImg" />
                <h1>History</h1>
                <p>Oran is a city in northwestern Algeria. It's known for its whitewashed colonial buildings, like the ornate.
                    Steeped in history, Oran boasts a vibrant tapestry woven by Andalusians, Ottomans, Spaniards and French influences.
                    Explore the imposing Kasbah, marvel at the Cathedral of Saint-Louis, or delve into Oran's rich heritage at the Ahmed Zabana Museum...</p>
            </div>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103667.50180033721!2d-0.7205943699468932!3d35.71122770835707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8854841f537d%3A0x4187f63762f7290f!2sOran!5e0!3m2!1sfr!2sdz!4v1716548815636!5m2!1sfr!2sdz" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </>
    );
}

export default Acceuil;
