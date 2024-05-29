import './App.css';
import Navbar from "./components/nav";
import {Routes,Route} from "react-router-dom";
import Home from "./routes/Home";
import Destinations from "./routes/Destinations";
import Contact from "./routes/Contact";
import Services from "./routes/Services";
import Footer from "./components/Footer";
import Sign from "./routes/Sign";
import Transport from "../src/service/transport";
import Login from "../src/routes/Login";
import Profil from "../src/routes/profile";
import Forget from "../src/routes/forget";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Destinations" element={<Destinations/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/transport" element={<Transport/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/profile" element={<Profil/>}/>
        <Route path="/forget" element={<Forget/>}/>
      </Routes>
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
