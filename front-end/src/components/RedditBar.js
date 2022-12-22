import React from "react";
import Divider from "@mui/material/Divider";
import RedditIcon from "@mui/icons-material/Reddit";
import { Button } from "@mui/material";

function RedditBar() {
  const handleClick = () => {
    window.location.href = "https://www.reddit.com/user/AngelGamesStudio";
  };
  return (
    <div
      onClick={handleClick}
      style={{
        borderRadius: "20px",
        backgroundColor: "white",
        width: "inherit",
        cursor: "pointer",
        display: "flex",
        paddingBottom: "1vh",
      }}
    >
      <div>
        <h2
          style={{
            textAlign: "left",
            paddingLeft: "1vw",
            fontSize: "20px",
            color: "rgb(15, 20, 25)",
          }}
        >
          Reddit From @AngelGamesStudio{""}
        </h2>
      </div>
      <RedditIcon
        sx={{ alignSelf: "center", paddingLeft: "5vw", paddingRight: "1vw" }}
      />
    </div>
  );
}

export default RedditBar;
