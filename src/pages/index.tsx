/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useState } from "react";
import * as jinrishici from "jinrishici";
import Particles from "react-tsparticles";
import Layout from "../components/Layout";
import particleOpts from "./particle.json";

const Home = () => {
  const [shichi, setShichi] = useState("");

  useEffect(() => {
    jinrishici.load(
      ({ data }) => {
        const { content, origin } = data;
        setShichi(`${content}——「${origin.title}」${origin.author}`);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <Layout>
      <header
        sx={{
          width: "100%",
          height: 300,
          position: "relative",
        }}
      >
        <Particles
          sx={{ width: "100%", height: "100%" }}
          width="100%"
          height="100%"
          options={particleOpts}
        />
        <div
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <h1
            sx={{
              width: 268,
              height: 80,
              textIndent: -1000,
              backgroundImage: "url(/assets/logo.png)",
              backgroundSize: "cover",
              marginLeft: -20,
            }}
          >
            苍微の城
          </h1>
          <p sx={{ color: "#fff" }} id="jinrishici-sentence">
            {shichi}
          </p>
        </div>
      </header>
      <section
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://bigheads.io/svg?accessory=none&body=chest&circleColor=blue&clothing=shirt&clothingColor=red&eyebrows=angry&eyes=normal&faceMask=false&faceMaskColor=green&facialHair=none3&graphic=react&hair=short&hairColor=black&hat=none5&hatColor=blue&lashes=false&lipColor=turqoise&mask=true&mouth=tongue&skinTone=yellow"
          alt="Big Head"
          sx={{
            width: 200,
          }}
        />
      </section>
    </Layout>
  );
};

export default Home;
