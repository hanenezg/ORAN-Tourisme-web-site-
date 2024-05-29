import React from "react";
import Navbar from "../components/nav";
import "./dest.css";
import cath from "../assets/cath.jpg";
import cath1 from "../assets/cath1.jpg"
import pda from "../assets/pda.jpg";
import pda1 from "../assets/pda1.jpg";
import santa from "../assets/santa.jpg";
import santa1 from "../assets/santa1.jpg";
import front from "../assets/front.jpg";
import front1 from "../assets/front1.jpg";
import man from "../assets/man.jpg";
import man1 from "../assets/man1.jpg"
import thea from "../assets/theat.jpg";
import thea1 from "../assets/theat1.jpg";
import toro from "../assets/toro.jpg";
import toro1 from "../assets/toro1.jpg";
import sidi from "../assets/sidi.jpg";
import sidi1 from "../assets/sidi1.jpg";
import mada from "../assets/mada.jpg";
import mada1 from "../assets/mada1.jpg";
import kris from "../assets/kri.jpg";
import kris1 from "../assets/kri1.jpg";
import cool from "../assets/cool.jpg";
import cool1 from "../assets/cool1.jpg";
import anda from "../assets/anda.jpg";
import anda1 from "../assets/anda1.jpg";
import muse from "../assets/Musée-ahmed-zabana.jpg"
import muse1 from "../assets/musee.jpg"

function Destinations() {
    const handleImageClick = (event) => {
        const img = event.target;
        if (img.classList.contains("zoom-in")) {
            img.classList.remove("zoom-in");
        } else {
            img.classList.add("zoom-in");
        }
    };
    return (
        <>
            <Navbar />
            <h1 className="t">Discover all the places you can visit while you're in our beautiful ORAN</h1>
            <main className="ma">
                <div className="dest">
                    <div className="image-grid">
                        <img src={cath} alt="cath" onClick={handleImageClick}/>
                        <img src={cath1} alt="cath1" onClick={handleImageClick}/>
                    </div>
                    <h4>Cathédrale du Sacré-Coeur</h4>
                    <p>The Cathédrale du Sacré-Coeur d'Oran is a former Roman-Byzantine Catholic church. The cathedral was designed by French architect Albert Ballu and was constructed using reinforced concrete, a relatively new technique at the time.</p>
                    <br/><span><a href="https://maps.app.goo.gl/UhFMA8XwPz5JBQeR6">Click here to see the location</a></span>
                </div>
                <div className="dest">
                    <div className="image-grid">
                        <img src={thea} alt="thea" onClick={handleImageClick}/>
                        <img src={thea1} alt="thea1" onClick={handleImageClick}/>
                    </div>
                    <h4>Théâtre Régional d'Oran</h4>
                    <p>The Théâtre Régional d'Oran, also known as the Théâtre Abdelkader Alloula, is an opera house and theater.</p>
                    <br/><span><a href="https://maps.app.goo.gl/yYoD2me8U27gSLbn8">Click here to see the location</a></span>
                </div>
                <div className="dest">
                    <div className="image-grid">
                        <img src={pda} alt="pda" onClick={handleImageClick}/>
                        <img src={pda1} alt="pda1" onClick={handleImageClick}/>
                    </div>
                    <h4>Place d'Armes</h4>
                    <p>The Place d'Armes in Oran is a square located in the city center of Oran, Algeria. It is surrounded by a number of important buildings, including the Oran Town Hall, the Cathedral of Oran, and the Théâtre Municipal d'Oran. The square is a popular spot for people-watching and enjoying the atmosphere of the city.</p>
                    <br/><span><a href="https://maps.app.goo.gl/3E26K9LvubcUW8pg6">Click here to see the location</a></span>
                </div>
                <div className="dest">
                    <div className="image-grid">
                        <img src={santa} alt="santa" onClick={handleImageClick}/>
                        <img src={santa1} alt="santa1" onClick={handleImageClick}/>
                    </div>
                    <h4>Santa Cruz</h4>
                    <p>Santa Cruz is a hilltop fortress and chapel in Oran, Algeria. It was built by the Spanish between 1577 and 1604 and offers panoramic views of the city.</p>
                    <br/><span><a href="https://maps.app.goo.gl/nGH5Yi14AUFcBsxaA">Click here to see the location</a></span>
                </div>
                <div className="dest">
                    <div className="image-grid">
                        <img src={toro} alt="toro" onClick={handleImageClick}/>
                        <img src={toro1} alt="toro1" onClick={handleImageClick}/>
                    </div>
                    <h4>Arènes d'Oran </h4>
                    <p>The Arènes d'Oran is a bullring located in Oran, Algeria. It is the only bullring in Algeria and one of the few in Africa. The bullring was built in 1908 and is made of reinforced concrete. It has a diameter of 210 meters and can seat up to 15,000 spectators.</p>
                    <br/><span><a href="https://maps.app.goo.gl/S1XEyBwLa3KpPR3D7">Click here to see the location</a></span>
                </div>
                <div className="dest">
                    <div className="image-grid">
                        <img src={sidi} alt="sidi" onClick={handleImageClick}/>
                        <img src={sidi1} alt="sidi1" onClick={handleImageClick}/>
                    </div>
                    <h4>Sidi El Houari</h4>
                    <p>Sidi El Houari is the oldest and most historic quarter of Oran, Algeria.  Sometimes called the heart of Oran, it's built on the slopes of Mount Murdjadjo  overlooking the old port.</p>
                    <br/><span><a href="https://maps.app.goo.gl/7Q44ELCNJabESXHx5">Click here to see the location</a></span>
                </div>
                <div className="dest">
                    <div className="image-grid">
                        <img src={muse} alt="muse" onClick={handleImageClick}/>
                        <img src={muse1} alt="muse1" onClick={handleImageClick}/>
                    </div>
                    <h4>Ahmed Zabana Museum</h4>
                    <p>
Immerse yourself in history and culture at the Ahmed Zabana National Museum in Oran! This grand building offers a captivating journey through Algeria's past, from prehistoric times to modern art.</p>
                    <br/><span><a href="https://maps.app.goo.gl/tsLKeUxT8NocVJck9">Click here to see the location</a></span>
                </div>
                <div className="dest">
                    <div className="image-grid">
                        <img src={mada} alt="mada" onClick={handleImageClick}/>
                        <img src={mada1} alt="mada1" onClick={handleImageClick}/>
                    </div>
                    <h4>Plage de medegh</h4>
                    <p>Plage de Madagh, also sometimes referred to as Madagh Beach, is actually two beaches together: Plage de Madagh 1 and Plage de Madagh 2. They are located near the city of Oran, Algeria, a few kilometers west of Les Andalouses.</p>
                    <br/><span><a href="https://maps.app.goo.gl/ZdhQKsV9rVRBGgqR8">Click here to see the location</a></span>
                </div>
                <div className="dest">
                    <div className="image-grid">
                        <img src={kris} alt="kris" onClick={handleImageClick}/>
                        <img src={kris1} alt="kris1" onClick={handleImageClick}/>
                    </div>
                    <h4>plage de kristel</h4>
                    <p>Kristel is a small village and port located on the Mediterranean coast of Algeria, about 26 km east of Oran. The village is known for its beautiful beaches, including Plage de Kristel, which is a popular spot for swimming, sunbathing, and camping. The area is also home to several thermal springs.</p>
                    <br/><span><a href="https://maps.app.goo.gl/uaVUJv5CASePL1w49">Click here to see the location</a></span>
                </div>
                <div className="dest">
                    <div className="image-grid">
                        <img src={anda} alt="anda" onClick={handleImageClick}/>
                        <img src={anda1} alt="anda1" onClick={handleImageClick}/>
                    </div>
                    <h4>Andalouse Complex</h4>
                    <p>The complex is situated on a beautiful stretch of coastline with stunning views of the Mediterranean Sea. It is a popular destination for both domestic and international tourists, offering a wide range of amenities and activities.</p>
                    <br/><span><a href="https://maps.app.goo.gl/tNqS7atGpBukNX6s7">click here to see the location</a></span>
                    </div>
                    <div className="dest">
                    <div className="image-grid">
                        <img src={front} alt="front" onClick={handleImageClick}/>
                        <img src={front1} alt="front1" onClick={handleImageClick}/>
                    </div>
                    <h4>Front de mer</h4>
                    <p>The Cathédrale du Sacré-Coeur d'Oran is a former Roman-Byzantine Catholic church. The cathedral was designed by French architect Albert Ballu and was constructed using reinforced concrete, a relatively new technique at the time.</p>
                    <br/><span><a href="https://maps.app.goo.gl/UhFMA8XwPz5JBQeR6">Click here to see the location</a></span>
                </div>
                <div className="dest">
                    <div className="image-grid">
                        <img src={man1} alt="man1" onClick={handleImageClick}/>
                        <img src={man} alt="man" onClick={handleImageClick}/>
                    </div>
                    <h4>El Hamri Park</h4>
                    <p>Djennet El Ahlem, is an amusement park located in Oran, Algeria. It is one of the most popular amusement parks in the country,and is a great place to take children for a day of fun.</p>
                    <br/><span><a href="https://maps.app.goo.gl/2bQJNywpjKFy3FyR7">Click here to see the location</a></span>
                </div>
                <div className="dest">
                    <div className="image-grid">
                        <img src={cool} alt="cool" onClick={handleImageClick}/>
                        <img src={cool1} alt="cool1" onClick={handleImageClick}/>
                    </div>
                    <h4>Cool Park</h4>
                    <p>Cool Park Oran is a complex that brings together several entertainments in one place, there is a Castle-Park, a Trampoline Park & a Lazer-game.</p>
                    <br/><span><a href="https://maps.app.goo.gl/nNp8aRgNKTL39fpi6">Click here to see the location</a></span>
                </div>
            </main>
        </>
    );
}

export default Destinations;
