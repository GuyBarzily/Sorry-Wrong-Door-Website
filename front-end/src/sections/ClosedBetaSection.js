import ClosedBetaData from "../components/ClosedBetaData";
import ClosedBetaInput from "../components/ClosedBetaInput";
import Title from "../components/Title";

const ClosedBetaSection = () => {
  const titleProps = {
    first: "Closed",
    second: "Beta",
  };
  return (
    <div
      id="closed-beta-section-id"
      style={{
        backgroundImage: "url(images/ClosedBetaBackground.jpeg)",
        backgroundSize: "cover",
        width: "100vw",
        height: "110vh",
      }}
    >
      <div style={{ paddingLeft: "20vw", paddingTop: "10vh" }}>
        <Title props={titleProps} />
        <ClosedBetaData />
        <div style={{ paddingRight: "30vw" }}>
          <ClosedBetaInput />
        </div>
      </div>
    </div>
  );
};

export default ClosedBetaSection;
