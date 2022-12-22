import React, { useEffect, useState } from "react";
import CarouselComp from "./Carousel";

function GalleryCarousel(props) {
  const [mainImage, setMainImg] = useState("");

  useEffect(() => {
    setMainImg(props.items[0]);
  }, [props.items]);
  return (
    <div style={{ width: "45vw" }}>
      <img
        style={{
          width: "20vw",
          height: "25vh",
          cursor: "pointer",
          paddingBottom: "0.5vw",
        }}
        src={mainImage}
      />
      <CarouselComp items={props.items} setMainImg={setMainImg} cols={4} />
    </div>
  );
}

export default GalleryCarousel;
