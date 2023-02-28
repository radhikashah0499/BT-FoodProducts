import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AboutUs from "./components/About Us";
import Namkeen from "./components/Namkeen";
import Sweets from "./components/Sweets";
import TeaSpices from "./components/Tea and Spices";
import Home from "./components/Home";
import Navigation from "./components/Header/navigation";
import ContactUs from "./components/ContactDetails";
import PapadMangodi from "./components/Papad and Mangodi";
export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/sweets" element={<Sweets />} />
        <Route path="/namkeen" element={<Namkeen />} />
        <Route path="/teaSpices" element={<TeaSpices />} />
        <Route path="/papadMangodi" element={<PapadMangodi />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
      <ContactUs />
    </Router>
  );
}
