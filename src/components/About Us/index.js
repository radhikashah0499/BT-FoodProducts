import React from "react";
import { PageBackground, Content } from "./styles";
import { aboutUsMsg, infrasturcture, aboutQuality, reputation } from "./locale";

export default function AboutUs() {
  return (
    <React.Fragment>
      <PageBackground>
        <Content>
          <div>
            <h2>About Us</h2>
            {aboutUsMsg}
            <br />
            {reputation}
          </div>
          <div>
            <h2>Infrasturcture</h2>
            {infrasturcture}
          </div>
          <div>
            <h2>Diversity</h2>
            {aboutQuality}
          </div>
        </Content>
      </PageBackground>
    </React.Fragment>
  );
}
