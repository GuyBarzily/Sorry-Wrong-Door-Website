import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "better-react-carousel";

const MobileCarousel = (props) => {
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
      {windowSize > 600 && (
        <>
          <Typography variant="h3" color="white">
            {props.title}
          </Typography>
          <Box sx={{ width: 650 }}>
            <Carousel
              cols={1}
              rows={1}
              gap={10}
              loop
              showDots={true}
              scrollSnap={true}
              autoplay={2000}
            >
              {items.map((item, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      src={item}
                      style={{ height: 300, width: 600, borderRadius: "25px" }}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Box>
        </>
      )}
      {windowSize <= 600 && (
        <>
          <Typography variant="h4" color="white">
            {props.title}
          </Typography>
          <Box sx={{ width: 300, paddingBottom: "10vh" }}>
            <Carousel
              cols={1}
              rows={1}
              gap={1}
              loop
              showDots={true}
              scrollSnap={true}
              autoPlay={1500}
            >
              {items.map((item, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img src={item} style={{ height: 200, width: 300 }} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Box>
        </>
      )}
    </Box>
  );
};

export default MobileCarousel;
