import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "better-react-carousel";

function WebCarousel(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.items);
  }, [props.items]);
  return (
    <>
      <Typography variant="h3" color="white" sx={{ paddingBottom: "10px" }}>
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
          autoplay={2500}
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
  );
}

export default WebCarousel;
