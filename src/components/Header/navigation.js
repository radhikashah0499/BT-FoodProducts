import React from "react";
import {Link} from  "react-router-dom";
import LogoPic from './logo.jpg';
import './index.css'
function Navigation() {
  return (
      <div className="navbar">
        <img src={LogoPic} className="logo"/>
        <div>
          <Link className="pages" style={{marginLeft:"200px"}} to="/">Home</Link>
        </div>
        <div>
        <Link  className="pages" to="/namkeen">Namkeen</Link>
        </div>
        <div>
        <Link  className="pages" to="/sweets">Sweets</Link>
        </div>
        <div>
        <Link  className="pages" to="/namkeen">Papad and Mangodi</Link>
        </div>
        <div>
        <Link  className="pages" to="/namkeen">Tea and Spices</Link>
        </div>
        
        <div>
        <Link  className="pages" to="/aboutus">About Us</Link>
        </div>
        <div className="contact">
          <div className="contactText">
            Contact Us
          </div>
        </div>
      </div>

  );
}
export default Navigation;
