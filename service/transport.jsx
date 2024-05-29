import React from "react";
import "../service/transport.css";
import Bus from "../service/bus";
import Tram from "../service/tram";
import Voiture from "../service/Voiture";
function transport(){
    return( 
    <>
    <h1 className="tra">Transport information</h1>
    <ul>
        <li className="lis"><Bus /></li>
        <li className="lis"><Tram/> </li>
        <li className="lis"><Voiture/></li>
    </ul>
    </>
);
}
export default transport;