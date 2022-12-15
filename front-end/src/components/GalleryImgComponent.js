import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState, useEffect } from "react";

function GalleryImgComponent(props) {
  const [mainImage, setMainImage] = useState("");
  const [mainIndex, setIndex] = useState(-1);
  const [itemData, setItemData] = useState([]);
  const noImage = "..public/images/No_Image_Available.jpeg";

  const arrowStyle = {
    paddingBottom: "10vh",
    color: "white",
    cursor: "pointer",
  };

  const handleClick = (event) => {
    setMainImage(event.target.src);
    const index = itemData.indexOf(event.target.src);
    setIndex(index);
  };

  const handleRightArrow = () => {
    let cur = mainIndex;
    if (cur !== itemData.length - 1) {
      setMainImage(itemData[++cur]);
      setIndex(cur);
    } else {
      setMainImage(itemData[0]);
      setIndex(0);
    }
  };

  const handleLeftArrow = () => {
    console.log("Left: ", mainIndex);
    let cur = mainIndex;
    const len = itemData.length;
    if (cur !== 0) {
      setMainImage(itemData[--cur]);
      setIndex(cur);
    } else {
      setMainImage(itemData[len - 1]);
      setIndex(len - 1);
    }
  };

  useEffect(() => {
    setItemData(props.images);
    setMainImage(itemData[0]);
    setIndex(0);
  }, [props.images, itemData]);

  return (
    <div>
      <h1 style={{ color: "white" }}>{props.props}</h1>
      <span>
        <ArrowBackIosNewIcon sx={arrowStyle} onClick={handleLeftArrow} />
        <img
          src={mainImage}
          alt={noImage}
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
            alt={noImage}
            key={item}
            // props={item.title}
            src={item}
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
