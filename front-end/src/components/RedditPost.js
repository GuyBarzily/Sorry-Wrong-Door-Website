import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Badge, Divider } from "@mui/material";
function RedditPost(props) {
  const [item, setItem] = useState();
  const [itemCount, setItemCount] = useState(4);

  const handleClick = (url) => {
    window.location.href = url;
  };

  useEffect(() => {
    setItem(props.data);
  }, [props.data]);
  return (
    <div>
      {item && (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleClick(item.url);
          }}
        >
          <div style={{ display: "flex" }}>
            <h3 style={{ textAlign: "left", paddingLeft: "1vw" }}>
              {item.subreddit_name_prefixed}
            </h3>
            <h5 style={{ textAlign: "left", paddingLeft: "1vw" }}>
              {"Posted by " + item.author}
            </h5>
          </div>
          <h4 style={{ textAlign: "left", paddingLeft: "1vw" }}>
            {item.title}
          </h4>
          <div
            style={{
              textAlign: "left",
              paddingLeft: "2vw",
            }}
          >
            <Iframe
              styles={{ borderRadius: "20px" }}
              url={item.video}
              id=""
              className=""
              padding="10vw"
              loading="eager"
            />
            <div style={{ paddingTop: "1vh" }}>
              <Badge
                sx={{
                  paddingLeft: "1vw",
                }}
                color="secondary"
                badgeContent={item.comments}
              >
                <ChatBubbleOutlineOutlinedIcon />
              </Badge>
            </div>
          </div>
          <Divider />
        </div>
      )}
    </div>
  );
}

export default RedditPost;
