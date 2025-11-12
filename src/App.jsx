import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header"
import Rooms from "../pages/Rooms"
import Home from "../pages/Home"
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";
import BookingPage from "../pages/BookingPage";
import Footer from "../Components/Footer"
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<BookingPage />} /> 
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App

