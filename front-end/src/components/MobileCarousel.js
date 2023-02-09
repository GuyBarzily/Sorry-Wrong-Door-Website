import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "better-react-carousel";

function MobileCarousel(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.items);
  }, [props.items]);
  return (
    <>
      <Typography variant="h4" color="white" sx={{ paddingBottom: "10px" }}>
        {props.title}
      </Typography>
      <Box sx={{ width: "100%", paddingBottom: "10vh" }}>
        <Carousel
          cols={1}
          rows={1}
          gap={40}
          loop={true}
          mobileBreakpoint={600}
          scrollSnap={true}
          autoplay={2000}
        >
          {items.map((item, index) => {
            return (
              <Carousel.Item key={index} width="100%">
                <img
                  src={item}
                  style={{ height: 200, width: "100%", borderRadius: 20 }}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Box>
    </>
  );
}

export default MobileCarousel;
