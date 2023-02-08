import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "better-react-carousel";
import MobileCarousel from "./MobileCarousel";
import WebCarousel from "./WebCarousel";

const CarouselHolder = (props) => {
  const [items, setItems] = useState([]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {windowSize > 600 && <WebCarousel items={items} title={props.title} />}
      {windowSize <= 600 && (
        <MobileCarousel items={items} title={props.title} />
      )}
    </Box>
  );
};

export default CarouselHolder;
