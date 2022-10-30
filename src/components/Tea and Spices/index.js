import React from "react";
import Card from "../ItemBox/card";
import { Cards, FlexRow } from "../ItemBox/styles";
import Chai from "./chai.jpg";
import Haldi from "./haldi.jpg";
import Mirchi from "./mirchi.jpg";
import daniya from "./daniya.jpg";

export default function TeaSpices() {
  return (
    <div style={{ background: "rgb(224, 219, 219)" }}>
      <FlexRow
        style={{ height: "100px", background: "#ebbb1e", alignItems: "center" }}
      >
        Our Tea and Spices
      </FlexRow>
      <Cards>
        <Card productName="Turmeric Powder" image={Haldi} />
        <Card productName="Mirchi Powder" image={Mirchi} />
        <Card productName="Coriander Powder" image={daniya} />
        <Card productName="Masala Chai Patti" image={Chai} />
      </Cards>
    </div>
  );
}
