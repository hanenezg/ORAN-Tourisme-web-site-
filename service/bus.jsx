import React, { useState } from "react";
import "./bus.css";

function Bus() {

    return (
        <>
            <h2 className="bus-title">Bus Ligne Oran</h2>
            
            <table className="bus-table">
            <tr>
                <th>Ligne</th>
                <th>Depart</th>
                <th>Arrive Destination</th>
            </tr>
            <tr>
                <td>11</td>
                <td>Place Valero(Bd Maata)</td>
                <td>Hai Sabah</td>
            </tr>
            <tr>
                <td>53</td>
                <td>HLM Gambetta</td>
                <td>Cité relogés 4400 Belgaid</td>
            </tr>
            <tr>
                <td>34</td>
                <td>Place Valero</td>
                <td>Cité 200 Logements</td>
            </tr>
            <tr>
                <td>37</td>
                <td>Place Mosque Derb</td>
                <td>El Hassi</td>
            </tr>
            <tr>
                <td>101</td>
                <td>Place Valero</td>
                <td>CNL Millenium</td>
            </tr>
            <tr>
                <td>51</td>
                <td>Mdina jdida-Palais des sports</td>
                <td>Hai Sabah</td>
            </tr>
            <tr>
                <td>H</td>
                <td>Le Rochet</td>
                <td>El Akid-Canastel</td>
            </tr>
            <tr>
                <td>P1</td>
                <td>Lycee Lotfi</td>
                <td>Universite Belgaid</td>
            </tr>
            <tr>
                <td>4G</td>
                <td>Yaghmoracen</td>
                <td>Usto</td>
            </tr>
            <tr>
                <td>23</td>
                <td>Place d'armes</td>
                <td>Agence Bahia</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Place Valero</td>
                <td>Les Oliviers</td>
            </tr>
            <tr>
                <td>18</td>
                <td>Sidi El Houari</td>
                <td>Cite Yaghmoracen</td>
            </tr>
        </table>
        </>
    );
}
export default Bus ;