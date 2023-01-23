import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CarouselComp from "./Carousel";

function GalleryCarousel(props) {
  const [mainImage, setMainImg] = useState("");

  useEffect(() => {
    setMainImg(props.items[0]);
  }, [props.items]);
  return (
    <Box>
      <img
        style={{
          width: 300,
          height: 200,
          cursor: "pointer",
          paddingBottom: "0.5vw",
        }}
        src={mainImage}
      />
      <CarouselComp items={props.items} setMainImg={setMainImg} cols={1} />
    </Box>
  );
}

export default GalleryCarousel;
