import { Timeline } from "react-twitter-widgets";
import React from "react";

export const TweeterFeed = () => {
  return (
    <div
      style={{
        width: "25vw",
        height: "inherit",
        overflowY: "scroll",
        borderRadius: "20px",
      }}
    >
      <Timeline
        dataSource={{ sourceType: "profile", screenName: "AngelGamesStud1" }}
        options={{ width: "25vw" }}
      />
    </div>
  );
};

export default TweeterFeed;
