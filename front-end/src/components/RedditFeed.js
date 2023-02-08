import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getReddit } from "../axios";
import RedditBar from "./RedditBar";
import RedditPost from "./RedditPost";

function RedditFeed() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await getReddit();
    console.log(res);
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      style={{
        borderRadius: "20px",
        backgroundColor: "white",
        width: 350,
        height: "70vh",
        overflowY: "scroll",
        display: "block",
      }}
    >
      <div style={{ width: "inherit" }}>
        <RedditBar />
        <Divider />
      </div>
      <div style={{ marginTop: "1vh" }}>
        {data.map((item, index) => {
          return <RedditPost key={index} data={item} />;
        })}
      </div>
    </div>
  );
}

export default RedditFeed;
