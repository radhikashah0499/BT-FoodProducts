import React from 'react';
import Card from "../ItemBox/card";
import { Cards, FlexRow } from "../ItemBox/styles";

import Mangodi from './images/mangodi.jpg';
import Papad from './images/papadd.jpg';
export default function PapadMangodi(){

    return (
        <div style={{ background: "rgb(224, 219, 219)" }}>
          <FlexRow
            style={{ height: "100px", background: "#ebbb1e", alignItems: "center" }}
          >
            Our Papad and Mangodi
          </FlexRow>
          <Cards>
            <Card productName="Papad" image={Mangodi}/>
            <Card productName="Mangodi" image={Papad}/>
          </Cards>
        </div>
      );
};