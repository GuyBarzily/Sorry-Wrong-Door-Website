import { Box, Typography } from "@mui/material";
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
        backgroundImage: "url(images/AboutUsBackground.jpeg)",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        <Title props={aboutUsProp} />
        <AboutUsData />
      </Box>
    </div>
  );
};

export default AboutUsSection;
