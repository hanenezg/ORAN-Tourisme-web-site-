import React, { useState } from "react";
import axios from "axios";
import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";
import personIcon from "../assets/person.png";
import { Link } from "react-router-dom";
import "./Sign.css";
import Msg from "../routes/Msg";

const securityQuestions = [
    "What is your mother name?",
    "What city were you born in?",
    "What is the name of your first pet?",
    "What is your favorite movie?",
    "What is your favorite book?"
];

function Sign() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        securityQuestion: "", 
        securityAnswer: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const [message, setMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const endpoint = "/sign.php";
        try {
            const response = await axios.post(`http://localhost:80${endpoint}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            setMessage(response.data.message);
            setShowPopup(true);
            console.log(response.data);
        } catch (error) {
            console.error("Network Error:", error);
            if (error.response) {
                setMessage(error.response.data.message);
            } else {
                setMessage("An error occurred. Please try again.");
            }
            setShowPopup(true);
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text1">Sign Up</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="input">
                        <img src={personIcon} alt="person" className="icon" />
                        <input
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input">
                        <img src={emailIcon} alt="email" className="icon" />
                        <input
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input">
                        <img src={passwordIcon} alt="password" className="icon" />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                            title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
                            required
                        />
                    </div>
                    <div className="input">
                        <select
                            name="securityQuestion"
                            value={formData.securityQuestion}
                            onChange={handleChange}
                            required
                        >
                        <option value="" disabled >Select a security question</option>
                            {securityQuestions.map((question, index) => (
                                <option key={index} value={question}>{question}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input">
                        <input
                            name="securityAnswer"
                            type="text"
                            placeholder="Security Answer"
                            value={formData.securityAnswer}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
            {showPopup && <Msg message={message} onClose={() => setShowPopup(false)} />}
            <Link to="/login" className="no">
                <p className="red">if you already have an account, login here</p>
            </Link>
        </div>
    );
}

export default Sign;
