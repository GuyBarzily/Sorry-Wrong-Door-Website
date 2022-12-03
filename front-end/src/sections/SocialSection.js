import TweeterFeed from "../components/TweeterFeed";

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
      <div style={{ paddingLeft: "15vw", paddingTop: "15vh" }}>
        <TweeterFeed />
      </div>
    </div>
  );
};

export default SocialSection;
