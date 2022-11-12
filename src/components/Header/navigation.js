import React from "react";
import {Link} from  "react-router-dom";
import LogoPic from './logo.jpg';
import './index.css';
import {Navigators} from './styles';

function Navigation() {
  return (
      <div className="navbar">
        <img src={LogoPic} className="logo"/>
        <Navigators>
          <Link className="pages" style={{marginLeft:"200px"}} to="/">Home</Link>
        </Navigators>
        <Navigators>
        <Link  className="pages" to="/namkeen">Namkeen</Link>
        </Navigators>
        {/* <Navigators>
        <Link  className="pages" to="/sweets">Sweets</Link>
        </Navigators> */}
        <Navigators>
        <Link  className="pages" to="/papadMangodi">Papad and Mangodi</Link>
        </Navigators>
        <Navigators>
        <Link  className="pages" to="/teaSpices">Tea and Spices</Link>
        </Navigators>
        
        <Navigators>
        <Link  className="pages" to="/aboutus">About Us</Link>
        </Navigators>
        <div className="contact">
          <div className="contactText">
            Contact Us
          </div>
        </div>
      </div>

  );
}
export default Navigation;
