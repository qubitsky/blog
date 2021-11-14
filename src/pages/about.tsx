/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import Layout from "../components/Layout";
import Header from "../components/Header";

const AboutMe = () => {
  return (
    <Layout header={<Header />}>
      <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ducimus
        cumque quis numquam nulla, culpa laudantium commodi asperiores! Sapiente
        eius dignissimos, atque numquam aliquid odio. Velit id fugit suscipit
        nulla?
      </Container>
    </Layout>
  );
};

export default AboutMe;
