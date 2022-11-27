import { CardMedia } from "@mui/material";
import Iframe from "react-iframe";

const GalleryVideos = () => {
  return (
    //src="https://www.youtube.com/watch?v=RgKAFK5djSk"
    <div>
      <h1 style={{ color: "white" }}>Videos</h1>
      <iframe
        url="https://www.sdrive.app/embed/1ptBQD"
        // width="640px"
        // height="320px"
        // display="flex"
        // position="relative"
      ></iframe>
    </div>
  );
};

export default GalleryVideos;
