import { AppBar, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-scroll";

const BasicAppBar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          background:
            "linear-gradient(90deg, rgba(32,32,32,1) 0%, rgba(40,40,59,1) 61%, rgba(32,32,32,1) 100%);",
        }}
      >
        <Toolbar variant="dense">
          <Typography variant="h6" sx={{ flexGrow: 1 }} color="white">
            <Link
              activeClass="active"
              to="about-us-section-id"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              About Us
            </Link>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="white"
          >
            <Link
              activeClass="active"
              to="social-section-id"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Social Feed
            </Link>
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              activeClass="active"
              to="main-section-id"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <img
                src="/images/Angelgameslogo.png"
                style={{
                  width: "5vw",
                  height: "8vh",
                }}
              ></img>
            </Link>
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="white"
          >
            <Link
              activeClass="active"
              to="closed-beta-section-id"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Closed Beta
            </Link>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="white"
          >
            <Link
              activeClass="active"
              to="gallery-section-id"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Gallery
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BasicAppBar;
