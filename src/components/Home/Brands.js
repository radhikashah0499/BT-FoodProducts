import React from 'react';
import Brand1 from '../../assests/images/brand2/brand1.jpg';
import Brand2 from '../../assests/images/brand2/brand2.jpg';
import Brand3 from '../../assests/images/brand2/brand3.jpg';
import Brand4 from '../../assests/images/brand2/brand4.jpg';
import Brand5 from '../../assests/images/brand2/brand5.jpg';
import Brand6 from '../../assests/images/brand2/brand6.jpg';


export default function Brands(){
    return(
        <div style={{display:"flex",flexDirection:"column" , alignItems:"center"}}>
            <div style={{fontSize:"48px", color:"#D13F4D", fontWeight:"800", marginTop:"20px"}}>Our Brands</div>
            <div style={{display:"flex",flexDirection:"row", justifyContent:"stretch", marginTop:"50px",backgroundColor:"white"}}>
               <img src={Brand1} style={{height:"128px", width:"230px"}}/>
               <img src={Brand2} style={{height:"128px", width:"230px"}}/>
               <img src={Brand3} style={{height:"128px", width:"250px"}}/>
               <img src={Brand4} style={{height:"128px", width:"200px"}}/>
               <img src={Brand5} style={{height:"128px", width:"200px"}}/>
               <img src={Brand6} style={{height:"128px", width:"200px"}}/>
            </div>
        </div>
    )

}