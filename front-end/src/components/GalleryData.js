import React, { useEffect, useState, useRef } from "react";
import GalleryImgComponent from "./GalleryImgComponent";
import GalleryCarousel from "./GalleryCarousel";
import MobileCarousel from "./MobileCarousel";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Box } from "@mui/material";

function GalleryData() {
  const [screenImages, setScreenImages] = useState([]);
  const didFetch = useRef(false);
  const [keyImages, setKeyImages] = useState([]);
  const screenListRef = ref(storage, "screenshots/");
  const keyArtListRef = ref(storage, "keyart/");

  const getScreenShotsImages = async () => {
    const list = await listAll(screenListRef);
    list.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        setScreenImages((prev) => [...prev, url]);
      });
    });
  };

  const getKeyArtImages = async () => {
    const list = await listAll(keyArtListRef);
    list.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        setKeyImages((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    if (!didFetch.current) {
      getScreenShotsImages();
      getKeyArtImages();
    }
    didFetch.current = true;
  }, [keyImages, screenImages]);
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        paddingBottom: "5vh",
      }}
    >
      <MobileCarousel items={screenImages} title="Screen Images" />
      <MobileCarousel items={keyImages} title="Key Art" />
    </Box>
  );
}

export default GalleryData;
