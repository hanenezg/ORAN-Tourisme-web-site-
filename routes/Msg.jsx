import React from "react";
import "./Msg.css";

function Msg({ message, onClose }) {
    return (
        <div className="msg-container">
            <div className="msg-content">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Msg;
