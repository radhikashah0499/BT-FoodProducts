import React  from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";


function ProductCategory({ tagLine, category, description, direction, image,link }) {

const navigate = useNavigate();

  function handleOnClick(){
     navigate(link);
  }

  return (
    <div className="product" style={{ marginTop: "50px", marginLeft: "150px" }}>
      {direction === "left" ? (
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "24px" }}
        >
          <div
            className="description"
            style={{ justifyContent: "flex-start", marginRight: "100px" }}
          >
            <div className="tag">{tagLine}</div>
            <div className="category">{category}</div>
            <div className="describe">{description}</div>
            <button className="btn" onClick={handleOnClick}>know more</button>
          </div>
          <div className="image" style={{ justifyContent: "flex-end" }}>
            <img
              src={image}
              style={{ height: "300px", width: "300px", borderRadius: "4px" }}
            />
          </div>
        </div>
      ) : (
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "24px" }}
        >
          <div className="image" style={{ justifyContent: "flex-start" }}>
            <img
              src={image}
              style={{ height: "300px", width: "300px", borderRadius: "10px" }}
            />
          </div>
          <div
            className="description"
            style={{ justifyContent: "flex-end", marginLeft: "200px" }}
          >
            <div className="tag">{tagLine}</div>
            <div className="category">{category}</div>
            <div className="describe">{description}</div>
            <button className="btn" >know more</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductCategory;
