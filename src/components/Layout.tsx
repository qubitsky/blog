/** @jsx jsx */
import React, { ReactNode } from "react";
import { jsx } from "theme-ui";
import { Helmet } from "react-helmet";

const Layout: React.FC<{
  header?: ReactNode;
}> = ({ header, children }) => {
  return (
    <>
      <Helmet>
        <title>苍微的网络空间</title>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Helmet>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          color: "#333",
        }}
      >
        {header}
        <main
          sx={{
            flex: "1 1 auto",
          }}
        >
          {children}
        </main>
        <footer
          sx={{
            width: "100%",
            textAlign: "center",
            fontSize: 12,
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
