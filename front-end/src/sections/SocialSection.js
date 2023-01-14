import TweeterFeed from "../components/TweeterFeed";
import RedditFeed from "../components/RedditFeed";
import { Box } from "@mui/material";

const SocialSection = () => {
  return (
    <div
      id="social-section-id"
      style={{
        backgroundImage: "url(images/SocialFeedBackground.jpeg)",
        backgroundSize: "cover",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <Box
        style={{
          paddingTop: "10vh",
          paddingBottom: "2vh",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <TweeterFeed />
        <RedditFeed />
      </Box>
    </div>
  );
};

export default SocialSection;
