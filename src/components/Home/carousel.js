import React from "react";
//import Carousel from 'react-material-ui-carousel';

export default function Carousel() {
  const listImages = [  "./images/nam4.png","./images/nam2.jpg","./images/nam1.jpeg"];
  return <img src={require(`${listImages[0]}`)} className="bannerPhoto" lading="eager"/>;
}
