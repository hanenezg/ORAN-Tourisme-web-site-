import React, { useState } from "react";
import axios from "axios";
import Msg from "../routes/Msg"; 
import { Link } from "react-router-dom";
import "./forget.css";

function ForgotPassword() {
    const [step, setStep] = useState(1); 
    const [formData, setFormData] = useState({ emailOrUsername: "", securityAnswer: "" });
    const [securityQuestion, setSecurityQuestion] = useState("");
    const [message, setMessage] = useState("");
    const [recoveredPassword, setRecoveredPassword] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost/searchUser.php", { emailOrUsername: formData.emailOrUsername }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.data.success) {
                setSecurityQuestion(response.data.securityQuestion);
                setStep(2);
            } else {
                setMessage(response.data.message);
                setShowPopup(true);
            }
        } catch (error) {
            console.error("Network Error:", error);
            setMessage("An error occurred. Please try again.");
            setShowPopup(true);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost/recoverPassword.php", formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.data.success) {
                setRecoveredPassword(response.data.password);
                setMessage(`Your recovered password is: ${response.data.password}`);
                setShowPopup(true);
            } else {
                setMessage(response.data.message);
                setShowPopup(true);
            }
        } catch (error) {
            console.error("Network Error:", error);
            setMessage("An error occurred. Please try again.");
            setShowPopup(true);
        }
    };

    return (
        <div className="cont1">
            <div className="head1">
                <div className="t11">Forgot Password</div>
                <div className="unli"></div>
            </div>
            {step === 1 && (
                <form onSubmit={handleSearch}>
                    <div className="in">
                        <input
                            name="emailOrUsername"
                            type="text"
                            placeholder="Email or Username"
                            value={formData.emailOrUsername}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Search</button>
                </form>
            )}
            {step === 2 && (
                <form onSubmit={handleSubmit}>
                    <div className="in">
                        <label>{securityQuestion}</label>
                        <input
                            name="securityAnswer"
                            type="text"
                            placeholder="Security Answer"
                            value={formData.securityAnswer}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Recover Password</button>
                </form>
            )}
            {showPopup && <Msg message={message} onClose={() => setShowPopup(false)} />}
            <Link to="/login" className="no">
                <p className="red">Back to the Login page</p>
            </Link>
        </div>
    );
}

export default ForgotPassword;
