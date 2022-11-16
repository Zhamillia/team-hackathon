import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import TabletMacOutlinedIcon from "@mui/icons-material/TabletMacOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import HeadphonesBatteryOutlinedIcon from "@mui/icons-material/HeadphonesBatteryOutlined";

import AppleIcon from "@mui/icons-material/Apple";


// custom

import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";

import { useProducts } from "../../contexts/ProductContextProvider";
import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import "../../styles/ProductSideBar.css";

import { useCart } from "../../contexts/CartContextProvider";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GradeIcon from "@mui/icons-material/Grade";


const pages = [
  {
    type: "Home",
    path: "/",
  },
  {
    type: "Admin",
    path: "/admin",
  },
];
const settings = [
  {
    type: "Register",
    path: "/register",
  },
  {
    type: "Login",
    path: "/login",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  const { getProducts } = useProducts();

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
    // setPage(1);
  }, [searchParams]);

  //custom
  const navigate = useNavigate();
  const { logout, user, checkAuth } = useAuth();

  const { cartLength } = useCart();


  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);


  const { fetchByParams } = useProducts();
  const [state, setState] = React.useState({
    left: false,
  });

  const sideBarItems = [
    {
      icon: <PhoneIphoneIcon style={{ margin: "10px" }} />,
      type: "Iphone",
    },
    {
      icon: <LaptopMacOutlinedIcon style={{ margin: "10px" }} />,
      type: "MacBook",
    },
    {
      icon: <TabletMacOutlinedIcon style={{ margin: "10px" }} />,
      type: "iPad",
    },
    {
      icon: <DesktopWindowsOutlinedIcon style={{ margin: "10px" }} />,
      type: "iMac",
    },
    {
      icon: <WatchOutlinedIcon style={{ margin: "10px" }} />,
      type: "Watch",
    },
    {
      icon: <HeadphonesBatteryOutlinedIcon style={{ margin: "10px" }} />,
      type: "AirPods",
    },
  ];
  //  !
  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 150 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="sideBar">
      <List className="sideBarIcon">
        {sideBarItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => {
              fetchByParams("type", item.type);
            }}>
            {item?.icon} {item.type}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar style={{ background: "black" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AppleIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            STORE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map(page => (
                <MenuItem
                  key={page.type}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(page.path);
                  }}>
                  <Typography textAlign="center">{page.type}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AppleIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(page => (
              <Button
                key={page.type}
                onClick={() => navigate(page.path)}
                sx={{ my: 2, color: "white", display: "block" }}>
                {page.type}
              </Button>
            ))}
            {/* Filter Panel */}
            <MenuItem onClick={toggleDrawer("left", true)}>
              <Typography textAlign="center">FILTER</Typography>
            </MenuItem>

            <Drawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}>
              {list("left")}
            </Drawer>

            {/* Filter panel end */}
            {/* add cart and likes */}
            <IconButton
              size="large"
              color="inherit"
              onClick={() => navigate("/cart")}>
              <Badge badgeContent={cartLength} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton onClick={() => navigate("/favorites")}>
              <GradeIcon
                size="small"
                color="warning"
                style={{
                  color: "#fff",
                }}
              />
            </IconButton>
          </Box>
          <Box>
            <input
              className="inputSideBar"
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search..."
            />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* after auth edit avatar */}

                <Avatar alt={user[0]} src="..." />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map(setting => (
                <MenuItem
                  key={setting.type}
                  onClick={() => {
                    navigate(setting.path);
                    handleCloseUserMenu();
                  }}>
                  <Typography textAlign="center">{setting.type}</Typography>
                </MenuItem>
              ))}

              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  logout();
                }}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // </ThemeProvider>
  );
}
export default ResponsiveAppBar;
