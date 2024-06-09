// import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import './App.css';
import Signup from "./Pages/Signup";
import ScrollToTop from "./Component/ScrollToTop";
import Travel from "./Component/Travel";


const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <div>
        <Navbar />
        <div className="nav-spacer"></div> {/* Spacer for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Travel" element={<Travel/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
