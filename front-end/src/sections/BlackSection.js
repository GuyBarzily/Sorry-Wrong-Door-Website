import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function BlackSection() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <video
        style={{
          width: "30vw",
          height: "40vh",
        }}
        src="https://v.redd.it/wn8e8b8xen1a1/DASH_1080.mp4?source=fallback"
        type="video/mp4"
        autoPlay={true}
      />
    </div>
  );
}

export default BlackSection;
