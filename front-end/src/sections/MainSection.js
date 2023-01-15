import { Box, Button } from "@mui/material";

const MainSection = () => {
  return (
    <div
      id="main-section-id"
      style={{
        backgroundImage: "url(images//LandingPageBackground.png)",
        backgroundSize: "cover",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        href="https://store.steampowered.com/app/2133810/Sorry_wrong_door/"
        sx={{
          backgroundColor: "red",
          width: 200,
          height: 50,
          "&.MuiButtonBase-root:hover": {
            bgcolor: "wheat",
            color: "black",
          },
        }}
      >
        View Game
      </Button>
    </div>
  );
};

export default MainSection;
