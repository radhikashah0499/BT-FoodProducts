import React from "react";
//import Carousel from 'react-material-ui-carousel';

export default function Carousel() {
  const listImages = [  "./nam4.png","./nam2.jpg","./nam1.jpeg"];
  return <img src={require(`${listImages[0]}`)} className="bannerPhoto" />;
}
