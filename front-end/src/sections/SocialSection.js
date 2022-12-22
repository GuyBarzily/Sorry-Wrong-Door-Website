import TweeterFeed from "../components/TweeterFeed";
import RedditFeed from "../components/RedditFeed";

const SocialSection = () => {
  return (
    <div
      id="social-section-id"
      style={{
        backgroundImage: "url(images/SocialFeedBackground.jpeg)",
        backgroundSize: "cover",
        width: "100vw",
        height: "110vh",
      }}
    >
      <div
        style={{
          paddingLeft: "20vw",
          paddingTop: "15vh",
          display: "flex",
          height: "65vh",
        }}
      >
        <TweeterFeed />
        <RedditFeed />
      </div>
    </div>
  );
};

export default SocialSection;
