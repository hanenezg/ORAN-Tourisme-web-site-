import React, { useState } from "react";
import Navbar from "../components/nav";
import "../routes/Contact.css";
import image1 from "../assets/image1.png";
import axios from "axios";
import Msg from "../routes/Msg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [message, setMessage] = useState(""); // Initialize message state
  const [showPopup, setShowPopup] = useState(false); // Initialize showPopup state

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = "/contact.php";
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

  const handleClosePopup = () => {
    setShowPopup(false);
    setMessage("");
  };

  return (
    <>
      <Navbar />
      <div>
        <img className="cover" src={image1} alt="HerpImg" />
      </div>
      <div className="text">
        <h1>Contact</h1>
      </div>
      <h1 className="msg">Send us a message or leave a review we will love to know your opinion</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
        <input className="send" type="submit" value="Send" />
      </form>
      {showPopup && <Msg message={message} onClose={handleClosePopup} />}
    </>
  );
}

export default Contact;
