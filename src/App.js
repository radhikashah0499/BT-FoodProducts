import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutUs from "./components/About Us";
import Namkeen from "./components/Namkeen";
import Sweets from "./components/Sweets";
import Home from './components/Home';
import Navigation from './components/Header/navigation';
import ContactUs from './components/ContactDetails';
export default function App() {
  return (
    <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/sweets" element={<Sweets />} />
          <Route path="/namkeen" element={<Namkeen />} />
        </Routes>
        <ContactUs/>
    </Router>
  );
}
