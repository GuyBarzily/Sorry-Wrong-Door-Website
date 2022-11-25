import { Typography } from "@mui/material";
import Title from "../components/Title";
import AboutUsData from "../components/AboutUsData";

const AboutUsSection = () => {
  const aboutUsProp = {
    first: "About",
    second: "Us",
  };
  return (
    <div
      id="about-us-section-id"
      style={{
        backgroundImage: "url(images/AboutUsBackground.jpg)",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        paddingLeft: "20vw",
        paddingTop: "10vh",
      }}
    >
      <Title props={aboutUsProp} />
      <AboutUsData />
    </div>
  );
};

export default AboutUsSection;
