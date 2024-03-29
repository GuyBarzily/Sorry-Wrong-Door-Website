import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import { fontSize } from "@mui/system";

const drawerWidth = 240;

const MobileAppBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleListClick = (event) => {
    console.log(event);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link
          activeClass="active"
          to="main-section-id"
          spy={true}
          smooth={true}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          <img
            alt=""
            src="/images/Angelgameslogo.png"
            style={{
              width: "25vw",
              height: "8vh",
            }}
          ></img>
        </Link>
      </Typography>
      <Divider sx={{ width: "100%" }} />
      <List>
        <ListItem disablePadding onClick={handleListClick}>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, my: 1, marginLeft: "2vw" }}
            color="black"
          >
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
        </ListItem>
        <ListItem disablePadding onClick={handleListClick}>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, my: 1, marginLeft: "2vw" }}
            color="black"
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
        </ListItem>
        <ListItem disablePadding onClick={handleListClick}>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, my: 1, marginLeft: "2vw" }}
            color="black"
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
        </ListItem>
        <ListItem disablePadding onClick={handleListClick}>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, my: 1, marginLeft: "2vw" }}
            color="black"
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
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          background:
            "linear-gradient(90deg, rgba(32,32,32,1) 0%, rgba(40,40,59,1) 61%, rgba(32,32,32,1) 100%);",
        }}
      >
        <Toolbar sx={{ paddingTop: "5px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link
              activeClass="active"
              to="main-section-id"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <img
                alt=""
                src="/images/Angelgameslogo.png"
                style={{
                  width: "5vw",
                  height: "8vh",
                }}
              ></img>
            </Link>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Box sx={{ width: "80vw", display: "flex" }}>
              <Button sx={{ color: "#fff", flexGrow: 1 }}>
                <Link
                  activeClass="active"
                  to="about-us-section-id"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{
                    cursor: "pointer",
                    fontSize: "large",
                    fontFamily: "serif",
                  }}
                >
                  About Us
                </Link>
              </Button>
              <Button sx={{ color: "#fff", flexGrow: 1 }}>
                <Link
                  activeClass="active"
                  to="social-section-id"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{
                    cursor: "pointer",
                    fontSize: "large",
                    fontFamily: "serif",
                  }}
                >
                  Social Feed
                </Link>
              </Button>
              <Button sx={{ color: "#fff", flexGrow: 1 }}>
                <Link
                  activeClass="active"
                  to="closed-beta-section-id"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{
                    cursor: "pointer",
                    fontSize: "large",
                    fontFamily: "serif",
                  }}
                >
                  Closed Beta
                </Link>
              </Button>
              <Button sx={{ color: "#fff", flexGrow: 1 }}>
                <Link
                  activeClass="active"
                  to="gallery-section-id"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{
                    cursor: "pointer",
                    fontSize: "large",
                    fontFamily: "serif",
                  }}
                >
                  Gallery
                </Link>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default MobileAppBar;
