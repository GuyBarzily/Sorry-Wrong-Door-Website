import { Box, Button } from "@mui/material";

const MainSection = () => {
  return (
    <Box
      id="main-section-id"
      sx={{
        backgroundImage: "url(images//LandingPageBackground.png)",
        backgroundSize: "cover",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <Button
        variant="contained"
        href="https://store.steampowered.com/app/2133810/Sorry_wrong_door/"
        sx={{
          backgroundColor: "red",
          marginBottom: 15,
          width: 300,
          height: 50,
          "&.MuiButtonBase-root:hover": {
            bgcolor: "wheat",
            color: "black",
          },
        }}
      >
        View Game
      </Button>
    </Box>
  );
};

export default MainSection;
