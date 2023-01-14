import { Box } from "@mui/material";
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
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title props={titleProps} />
        <ClosedBetaData />
        <ClosedBetaInput />
      </Box>
    </div>
  );
};

export default ClosedBetaSection;
