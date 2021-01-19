import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const NotFound = () => {
  return (
    <Player
      src="https://assets3.lottiefiles.com/packages/lf20_rDB3bm.json"
      background="transparent"
      speed={1}
      style={{ width: "300px", height: "300px" }}
      loop
      controls
      autoplay
    ></Player>
  );
};

export default NotFound;
