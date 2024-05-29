import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";
import "./Sign.css";
import Msg from "../routes/Msg";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [message, setMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const endpoint = "/login.php";
        try {
            const response = await axios.post(`http://localhost:80${endpoint}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            setMessage(response.data.message);
            setShowPopup(true);
            if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify(response.data.user));
                navigate('/profile');
            }
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

    const handleClosePopup = () => {
        setShowPopup(false);
        setMessage("");
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text1">Login</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
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
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
            <Link to="/forget" className="no">
            <p className="red">forget your password</p>
            </Link>
            {showPopup && <Msg message={message} onClose={handleClosePopup} />}
            <Link to="/sign" className="no">
                <p className="red">Back to the Sign Up page</p>
            </Link>
        </div>
    );
}

export default Login;
