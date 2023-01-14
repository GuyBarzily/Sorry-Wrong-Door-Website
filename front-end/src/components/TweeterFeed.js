import { Timeline } from "react-twitter-widgets";
import React from "react";

export const TweeterFeed = () => {
  return (
    <div
      style={{
        height: "70vh",
        overflowY: "scroll",
        borderRadius: "20px",
        marginBottom: "5vh",
      }}
    >
      <Timeline
        dataSource={{ sourceType: "profile", screenName: "AngelGamesStud1" }}
        options={{ width: 350 }}
      />
    </div>
  );
};

export default TweeterFeed;
