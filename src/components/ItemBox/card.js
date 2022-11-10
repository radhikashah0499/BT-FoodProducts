import React from "react";
import {
  StyledBox,
  ProductItem,
  ProductName,
  ProductPrice,
  FlexRow,
  StrikeText,
} from "./styles";

export default function Card({
  productName,
  discountPrice,
  Price,
  discount,
  image,
}) {
  return (
    <StyledBox>
      <ProductItem src={image} />

      <ProductName>{productName}</ProductName>
      {/* <ProductPrice>
        <FlexRow>
          <div>&#8377; {discountPrice}</div>
          <StrikeText>&#8377; {Price}</StrikeText>
          <div style={{ color: "grey" }}>({discount}% off)</div>
        </FlexRow>
      </ProductPrice> */}
    </StyledBox>
  );
}
