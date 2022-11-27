import { Button } from "@mui/material";

const MainSection = () => {
  return (
    <div
      id="main-section-id"
      style={{
        backgroundImage: "url(images//LandingPageBackground.png)",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        href="https://store.steampowered.com/app/2133810/Sorry_wrong_door/"
        sx={{
          position: "absolute",
          bottom: "10vw",
          left: "35vw",
          backgroundColor: "red",
          width: "30vw",
          height: "5vh",
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
