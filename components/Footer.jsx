import React from "react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="feet">
                <div className="social-links">
                    <a href="https://www.facebook.com/Oran_dz" className="social-link">
                        <FaFacebook className='icon' />
                        <span>Oran_dz Facebook</span>
                    </a>
                    <a href="https://www.instagram.com/Oran_dz" className="social-link">
                        <FaInstagram className='icon' />
                        <span>Oran_dz Instagram</span>
                    </a>
                </div>
                <div className="contact-info">
                    <p>Email: contact@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
            </div>
            <p className="copyright">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
