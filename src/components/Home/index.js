import React from "react";
import "./index.css";
import Carousel from "./carousel";
import ProductCategory from "./ProductCategory";
import { ProductDetails } from "./product-data";
import amazon from "../../assests/images/logos/amazon.jpeg";
import flipkart from "../../assests/images/logos/flipkart.png";
import jiomart from "../../assests/images/logos/jiomart.png";
import meesho from "../../assests/images/logos/meesho.png";
import mirchi from "../../assests/images/logos/mirchi.png";
import ezmall from "../../assests/images/logos/ezmall.jpeg";
import Brands from "./Brands";
export default function Home() {
  return (
    <div className="backk">
      <div className="mandala">
        <p className="productName">BT Food Products</p>

        <div style={{ width: "100%", height: "100%" }}>
          <Carousel />
        </div>
      </div>
      <div  >
        <ProductCategory
          direction="left"
          tagLine={ProductDetails.tagLine[0]}
          category={ProductDetails.category[0]}
          description={ProductDetails.description[0]}
          image={ProductDetails.image[0]}
          link={ProductDetails.link[0]}
        />
        <ProductCategory
          direction="right"
          tagLine={ProductDetails.tagLine[1]}
          category={ProductDetails.category[1]}
          description={ProductDetails.description[1]}
          image={ProductDetails.image[1]}
          link={ProductDetails.link[1]}
        />
        <ProductCategory
          direction="left"
          tagLine={ProductDetails.tagLine[2]}
          category={ProductDetails.category[2]}
          description={ProductDetails.description[2]}
          image={ProductDetails.image[2]}
          link={ProductDetails.link[2]}
        />
        <ProductCategory
          direction="right"
          tagLine={ProductDetails.tagLine[3]}
          category={ProductDetails.category[3]}
          description={ProductDetails.description[3]}
          image={ProductDetails.image[3]}
          link={ProductDetails.link[3]}
        />
      </div>
      <div style={{ height: "12px", background: "#253344" , marginTop:"40px"}} />
      {/* <div
        style={{
          height: "70px",
          background: "#253344",
          color: "#ACB0B5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
        }}
      >
      Our Brands
      </div> */}
      <div style={{ height: "300px" }}>
        <Brands />
      </div>

      <div
        style={{
          height: "70px",
          background: "#253344",
          color: "#ACB0B5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
        }}
      >
        Find our products available on
      </div>
      <div
        style={{
          height: "111px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a href="https://www.amazon.in/MADHU-ROYAL-MIXTURE-400g-PACK/dp/B09F6DMR92?language=en_IN">
          <img src={amazon} style={{ width: "100px", height: "80px" }} />
        </a>
        <a href="https://www.flipkart.com/madhu-royam-mixture-400-g/p/itmb33f7ec4419fe?pid=SNSG6YZDCF4HFTYX&lid=LSTSNSG6YZDCF4HFTYXGHV8M7&marketplace=FLIPKART&q=madhu+mixture&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=6df15acc-a8d6-4448-8d26-4cdb53d3da47.SNSG6YZDCF4HFTYX.SEARCH&ppt=pp&ppn=pp&ssid=9ic3fced8w0000001664811402235&qH=333a41990bce8a91">
          <img
            src={flipkart}
            style={{ width: "130px", height: "80px", paddingLeft: "20px" }}
          />
        </a>
        <a href="https://www.jiomart.com/p/groceries/400-gms/591524737">
          <img
            src={jiomart}
            style={{ width: "130px", height: "80px", paddingLeft: "20px" }}
          />
        </a>
        <a href="https://www.meesho.com/BTFOODPRODUCTSPVTLTD?_ms=2">
          <img
            src={meesho}
            style={{ width: "100px", height: "80px", paddingLeft: "20px" }}
          />
        </a>
        <a href="https://mirchi.com/combo-of-boondi-madhu-namkeen?langcode=en-IN&curncode=hi-IN">
          <img
            src={mirchi}
            style={{ width: "170px", height: "80px", paddingLeft: "20px" }}
          />
        </a>
        <a href="https://www.ezmall.com/the-authentic-store/regional-taste/namkeens/madhu-royal-mixture-namkeen-400-gm/1076751">
          <img
            src={ezmall}
            style={{ width: "100px", height: "80px", paddingLeft: "20px" }}
          />
        </a>
      </div>
    </div>
  );
}

//add loading=eager on img tag