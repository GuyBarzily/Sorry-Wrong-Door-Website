import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState, useEffect } from "react";

function GalleryImgComponent(props) {
  const [mainImage, setMainImage] = useState("");
  const [mainIndex, setIndex] = useState(-1);

  const arrowStyle = {
    paddingBottom: "10vh",
    color: "white",
    cursor: "pointer",
  };

  const handleClick = (event) => {
    setMainImage(event.target.src);
    console.log(Object.values(event.target)[0].key);
    setIndex(Object.values(event.target)[0].key);
    func();
  };

  const func = () => {
    console.log("func: ", mainIndex);
  };

  const handleRightArrow = () => {
    let cur = mainIndex;
    console.log("handleRight: ", mainIndex);
    console.log("cur", cur);
    console.log("len: ", itemData.length);
    if (cur !== itemData.length - 1) {
      setMainImage(itemData[++cur].img);
      setIndex(cur);
    } else {
      setMainImage(itemData[0].img);
      setIndex(0);
    }
  };

  const handleLeftArrow = () => {
    let cur = mainIndex;
    const len = itemData.length;
    console.log("len: ", len);
    if (cur !== 0) {
      setMainImage(itemData[--cur].img);
      setIndex(cur);
    } else {
      setMainImage(itemData[len - 1].img);
      setIndex(len - 1);
    }
  };
  const itemData = [
    {
      img: "../images/AboutUsBackground.jpeg",
      title: 0,
    },
    {
      img: "../images/ClosedBetaBackground.jpeg",
      title: 1,
    },
    {
      img: "../images/SocialFeedBackground.jpeg",
      title: 2,
    },
    {
      img: "../images/GalleryBackground.jpeg",
      title: 3,
    },
  ];
  useEffect(() => {
    setMainImage(itemData[0].img);
    setIndex(0);
  }, []);

  return (
    <div>
      <h1 style={{ color: "white" }}>{props.props}</h1>
      <span>
        <ArrowBackIosNewIcon sx={arrowStyle} onClick={handleLeftArrow} />
        <img
          src={mainImage}
          style={{
            width: "20vw",
            height: "25vh",
          }}
        />
        <ArrowForwardIosIcon sx={arrowStyle} onClick={handleRightArrow} />
      </span>
      <div style={{ paddingTop: "0.5vh", width: "50vw", height: "10vh" }}>
        {itemData.map((item) => (
          <img
            onClick={handleClick}
            key={item.title}
            props={item.title}
            src={item.img}
            style={{
              paddingLeft: "0.5vw",
              width: "10vw",
              height: "15vh",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default GalleryImgComponent;
