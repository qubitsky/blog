import React from "react";
import Layout from "../components/Layout";
import './style.css';

const Home = () => {
  return (
    <Layout>
      <h1>苍微の城</h1>
      <p>
        <img
          src="https://bigheads.io/svg?accessory=none&body=chest&circleColor=blue&clothing=shirt&clothingColor=red&eyebrows=angry&eyes=normal&faceMask=false&faceMaskColor=green&facialHair=none3&graphic=react&hair=short&hairColor=black&hat=none5&hatColor=blue&lashes=false&lipColor=turqoise&mask=true&mouth=tongue&skinTone=yellow"
          alt="Big Head"
        />
      </p>
      <p>分享知识，记录生活</p>
      <p>
        开发中
        <span className="loading time"></span>
      </p>
      <p>
        <span className="loading fish"></span>
      </p>
      <footer>
        <p>Copyright © 2020 qubitsky. All Rights Reserved. 苍微q 版权所有</p>
      </footer>
    </Layout>
  );
};

export default Home;
