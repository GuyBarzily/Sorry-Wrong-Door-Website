import React, { useEffect, useState } from "react";
import Carousel from "better-react-carousel";

const CarouselComp = (props) => {
  const [items, setItems] = useState([]);
  const handleClick = (e) => {
    console.log(e.target);
    props.setMainImg(e.target.src);
  };
  useEffect(() => {
    setItems(props.items);
  }, [props.items]);
  return (
    <Carousel
      containerStyle={{ padding: "0" }}
      cols={props.cols}
      rows={1}
      gap={0}
      loop
    >
      {items.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              style={{
                width: "10vw",
                height: "15vh",
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
