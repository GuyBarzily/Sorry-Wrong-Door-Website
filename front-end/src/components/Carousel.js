import React, { useEffect, useState } from "react";
import Carousel from "better-react-carousel";

const CarouselComp = (props) => {
  const [items, setItems] = useState([]);
  const handleClick = (e) => {
    props.setMainImg(e.target.src);
  };
  useEffect(() => {
    setItems(props.items);
  }, [props.items]);
  return (
    <Carousel cols={props.cols} gap={0} loop>
      {items.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              alt=""
              style={{
                width: 150,
                height: 130,
                cursor: "pointer",
              }}
              src={item}
              onClick={handleClick}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselComp;
