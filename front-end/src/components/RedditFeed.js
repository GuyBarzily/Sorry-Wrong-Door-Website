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
    // setData([
    //   {
    //     author: "AngelGamesStudio",
    //     comments: 0,
    //     subreddit_name_prefixed: "r/indiegames",
    //     thumbnail:
    //       "https://b.thumbs.redditmedia.com/WfbclKgwoCIDzv_nGrUEPqSMC9szYfXBv9Pp3qOfUkA.jpg",
    //     title:
    //       "Hey everyone, I just added a destruction effect to my horror game! Is that a bit too much?",
    //     url: "https://v.redd.it/vfievr53to5a1",
    //     video: "https://v.redd.it/vfievr53to5a1/DASH_1080.mp4?source=fallback",
    //   },
    // ]);
    getData();
  }, []);
  return (
    <div
      style={{
        borderRadius: "20px",
        backgroundColor: "white",
        width: "25vw",
        height: "inherit",
        marginLeft: "10vw",
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
