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

const drawerWidth = 240;
const navItems = ["Home", "About", "Project", "Skill", "Contact"];

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
  }

  handleDrawerToggle = () => {
    this.setState((prevState) => ({
      mobileOpen: !prevState.mobileOpen,
    }));
  };

  render() {
    const { window } = this.props;

    const drawer = (
      <Box
        onClick={this.handleDrawerToggle}
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
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center", color: "white" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
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
              onClick={this.handleDrawerToggle}
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
                  key={item}
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    "&:hover": {
                      textDecoration: "underline",
                      color: "purple",
                    },
                  }}
                >
                  {/* tambah component untuk link */}
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
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
  }
}

export default NavbarComponent;
