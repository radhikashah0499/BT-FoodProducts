import React from "react";
import "./index.css";
import Carousel from "./carousel";
import ProductCategory from "./ProductCategory";
import { ProductDetails } from "./product-data";
import amazon from './amazon.jpeg';
import flipkart from './flipkart.jpeg';

export default function Home() {
  return (
    <div>
      <div className="mandala">
        <p className="productName">BT Food Products</p>

        <div style={{ width: "100%", height: "100%" }}>
          <Carousel />
        </div>
      </div>
      <div>
        <ProductCategory
          direction="left"
          tagLine={ProductDetails.tagLine[0]}
          category={ProductDetails.category[0]}
          description={ProductDetails.description[0]}
          image={ProductDetails.image[0]}
        />
        <ProductCategory
          direction="right"
          tagLine={ProductDetails.tagLine[1]}
          category={ProductDetails.category[1]}
          description={ProductDetails.description[1]}
          image={ProductDetails.image[1]}
        />
        <ProductCategory
          direction="left"
          tagLine={ProductDetails.tagLine[2]}
          category={ProductDetails.category[2]}
          description={ProductDetails.description[2]}
          image={ProductDetails.image[2]}
        />
        <ProductCategory
          direction="right"
          tagLine={ProductDetails.tagLine[3]}
          category={ProductDetails.category[3]}
          description={ProductDetails.description[3]}
          image={ProductDetails.image[3]}
        />
      </div>

      <div style={{height:"135px",background:"#253344", color:"#ACB0B5", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"30px"}}>
        Our Products Are available On 
      </div>
      <div style={{height:"111px" , display:"flex", flexDirection:"row",alignItems:"center", justifyContent:"center"}}>
        <a href="https://www.amazon.in/MADHU-TAM-MIXTURE-400-GMS/dp/B09J8XCX78/ref=sr_1_6?crid=2BZAS6J21GS5Z&keywords=madhu+namkeen&qid=1663758011&sprefix=madhu+namkeen%2Caps%2C222&sr=8-6">
          <img src={amazon} style={{width: "244px", height:"102px"}}/>
        </a>
        <a>
          <img src={flipkart} style={{width: "244px", height:"102px"}}/>
        </a>
      </div>
      <div style={{height:"28px", background:"#253344"}}>

      </div>
      <div style={{height:"300px"}}>

      </div>

    </div>
  );
}
