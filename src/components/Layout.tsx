/** @jsx jsx */
import React from "react";
import { jsx, SxStyleProp } from "theme-ui";
import { Helmet } from "react-helmet";

const Layout: React.FC<{
  mainSxProp?: SxStyleProp;
}> = ({ mainSxProp, children }) => {
  return (
    <>
      <Helmet>
        <title>苍微之城</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Helmet>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <main
          sx={{
            width: "100%",
            flex: "1 1 auto",
            ...mainSxProp,
          }}
        >
          {children}
        </main>
        <footer
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <p>
            Copyright © {new Date().getFullYear()} qubitsky. All Rights
            Reserved. 苍微q 版权所有
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
