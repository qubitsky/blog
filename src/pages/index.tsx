/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout
      mainSxProp={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>苍微の城</h1>
      <p>
        <img
          src="https://bigheads.io/svg?accessory=none&body=chest&circleColor=blue&clothing=shirt&clothingColor=red&eyebrows=angry&eyes=normal&faceMask=false&faceMaskColor=green&facialHair=none3&graphic=react&hair=short&hairColor=black&hat=none5&hatColor=blue&lashes=false&lipColor=turqoise&mask=true&mouth=tongue&skinTone=yellow"
          alt="Big Head"
          sx={{
            width: 200,
            height: 200,
          }}
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
      <ul
        sx={{
          width: 240,
          padding: 0,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <li>
          <Link to="/articles">文章</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default Home;
