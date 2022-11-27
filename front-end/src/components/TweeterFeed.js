import { Timeline } from "react-twitter-widgets";
import React from "react";

export const TweeterFeed = () => {
  return (
    <Timeline
      dataSource={{ sourceType: "profile", screenName: "AngelGamesStud1" }}
      options={{ width: "400", height: "700" }}
    />
  );
};

export default TweeterFeed;
