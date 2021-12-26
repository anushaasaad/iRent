import React from "react";
import {
  Drawer,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles({
  SidePaper: {
    width: "320px",
    backgroundColor: "rgb(200, 250, 205)",
    border: "none",
    boxShadow: "none",
  },
  Logo: {
    fontSize: "24px",
    margin: "15px",
    // background: "red",
    backgroundColor: "#69F0AE",
    borderRadius: "12px",
    padding: "5px",
  },
});

export default function Sidebar() {
  const classes = useStyles();

  const menuItems = [
    {
      text: "Dash Board",
      icon: "#",
      path: "/Admin-DashBoard",
    },
    {
      text: "View Profile",
      icon: "#",
      path: "/Admin-Profile",
    },
    {
      text: "Add HR",
      icon: "#",
      path: "/Admin-HR-Foam",
    },
    {
      text: "Add Deparment",
      icon: "#",
      path: "/Admin-Department-Foam",
    },
    {
      text: "Add Designation",
      icon: "#",
      path: "/Admin-Designation-Foam",
    },
  ];
  // return <div className={classes.sideMenu}></div>;

  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.SidePaper }}
        open={false}
      >
        <div className={classes.Logo} open="false">
          <Typography variant="h6" component="div" align="center">
            HR Management System
          </Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              onClick={() => {
              }}
              key={item.text}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}