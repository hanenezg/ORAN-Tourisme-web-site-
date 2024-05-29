import React from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

function Profile() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        navigate('/login');
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h1 className="profile-title">Welcome, {user.username}</h1>
                <p className="profile-email">Email: {user.email}</p>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default Profile;
