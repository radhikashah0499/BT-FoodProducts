import React from 'react';
export default function Carousel(){
    const listImages  = ['./photo2.jpeg'];
    return <img src={require(`${listImages[0]}`)} className="bannerPhoto" />
}