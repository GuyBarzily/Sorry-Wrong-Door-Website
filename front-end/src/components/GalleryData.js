import React from "react";
import GalleryImgComponent from "./GalleryImgComponent";

function GalleryData() {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <GalleryImgComponent props="Screen Shots" />
      <GalleryImgComponent props="Key Art" />
    </div>
  );
}

export default GalleryData;
