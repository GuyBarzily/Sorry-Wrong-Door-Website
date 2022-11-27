import { Timeline } from "react-twitter-widgets";
import React from "react";

export const TweeterFeed = () => {
  return (
    <Timeline
      dataSource={{ sourceType: "profile", screenName: "AngelGamesStud1" }}
      options={{ width: "25vw", height: "500vh" }}
    />
  );
};

export default TweeterFeed;
