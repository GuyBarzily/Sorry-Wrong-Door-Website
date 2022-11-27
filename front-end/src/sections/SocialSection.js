import TweeterFeed from "../components/TweeterFeed";

const SocialSection = () => {
  return (
    <div
      id="social-section-id"
      style={{
        backgroundImage: "url(images/SocialFeedBackground.jpeg)",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ padding: "20vh" }}>
        <TweeterFeed />
      </div>
    </div>
  );
};

export default SocialSection;
