import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "typeface-lobster";
import { useLocation, Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  {
    nama: "Home",
    link: "/",
  },
  {
    nama: "About",
    link: "/AboutMe",
  },
  {
    nama: "Project",
    link: "/MyProject",
  },
  {
    nama: "Skill",
    link: "/MySkill",
  },
  {
    nama: "Contact",
    link: "/ContactMe",
  },
];

const NavbarComponent = () => {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeButton, setActiveButton] = React.useState("Home");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setActiveButton(null);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{ my: 2, fontFamily: "Lobster, cursive", color: "#0eeae2" }}
      >
        Didik Adi Darmawan
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.nama} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: "white" }}>
              <ListItemText primary={item.nama} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background:
            "linear-gradient(120deg,rgba(19, 30, 54, 255) 25%,rgba(67, 38, 100, 255) 100%)",
        }}
      >
        <Toolbar>
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
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Lobster, cursive",
              color: "#0eeae2",
            }}
          >
            Didik Adi Darmawan
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.nama}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  marginX: "2px",
                  "&:hover": {
                    color: "purple",
                    borderBottom: "3px solid purple",
                    paddingBottom: "2px",
                  },
                  ...(location.pathname === item.link && {
                    borderBottom: "3px solid purple",
                    paddingBottom: "2px",
                    color: "purple",
                    fontWeight: "bold",
                  }),
                }}
                component={Link}
                to={item.link}
                onClick={() => {
                  setActiveButton(item.nama);
                }}
              >
                {item.nama}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={undefined}
          variant="temporary"
          open={mobileOpen}
          onClose={() => {
            setMobileOpen(false);
            setActiveButton(null);
          }}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:
                "linear-gradient(120deg,rgba(19, 30, 54, 255) 25%,rgba(67, 38, 100, 255) 100%)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavbarComponent;
