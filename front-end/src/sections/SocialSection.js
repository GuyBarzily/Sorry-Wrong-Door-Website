import TweeterFeed from "../components/TweeterFeed";
import RedditFeed from "../components/RedditFeed";
import { Box } from "@mui/material";
import Title from "../components/Title";

const SocialSection = () => {
  const socialProp = {
    first: "Social",
    second: "Feed",
  };

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
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title props={socialProp} />
      </Box>
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
