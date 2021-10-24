
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import React,{ Fragment } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(!openDrawer);
  };

  const navLinks = [{ name: "Home", link: "/" },{ name: "About", link: "/" }]

  const listOptions = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {navLinks.map((navObj) => (
          <ListItem button key={navObj.name}>
            <ListItemText primary={navObj.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (

    <Fragment key={"navBar"}>
      <Button onClick={toggleDrawer}><MenuIcon sx={{ color: "#FFFFFF" }} /></Button>
      <SwipeableDrawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        {listOptions()}
      </SwipeableDrawer>
    </Fragment>

  );
}

export default NavBar;