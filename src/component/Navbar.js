import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, {useState} from "react";
import {makeStyles} from "@mui/styles";
import {green} from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.only("md")]: {
      backgroundColor: theme.palette.secondary.main,
      display: "flex",
      justifyContent: "space-between",
    },
    [theme.breakpoints.only("md")]: {
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      justifyContent: "space-between",
    },
    [theme.breakpoints.only("lg")]: {
      backgroundColor: green[500],
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(null);
  const [languageAnchorEL, setLanguageAnchorEL] = useState(null);
  const handleOpen = (e) => setLanguageAnchorEL(e.currentTarget);
  const handleClose = () => setLanguageAnchorEL(false);

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Hidden mdDown>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              News
            </Typography>
          </Hidden>
          <Button color="inherit" onClick={handleOpen} open={open}>
            Login
          </Button>
          <Menu open={Boolean(open)} anchorEl={open} onClose={handleClose}>
            <MenuItem onClose={handleClose}>digviay</MenuItem>
            <MenuItem onClose={handleClose}>anshu</MenuItem>
            <MenuItem onClose={handleClose}>vijay</MenuItem>
            <MenuItem onClose={handleClose}>david</MenuItem>
            <MenuItem onClose={handleClose}>digviay</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
