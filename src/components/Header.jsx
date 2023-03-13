import {
  AccountCircle,
  ArrowForward,
  ExpandLess,
  ExpandMore,
  Home,
  Logout,
  MenuOutlined,
  OndemandVideo,
  Search,
  ShoppingBasket,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tabs,
  Toolbar,
  Typography,
  Tab,
} from "@mui/material";
import {
  BrowserRouter,
  Route,
  Switch,
  Link as RouterLink,
  Link,
} from "react-router-dom";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  setSearchMovie,
} from "../features/Movies/movieSlice";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [tabValue, setTabValue] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const submitSearchHandler = () => {
    dispatch(fetchAsyncMovies(searchValue));
    dispatch(fetchAsyncShows(searchValue));
    setSearchValue("");
  };

  return (
    <>
      <AppBar className="flex items-center justify-center bg-secondary">
        <Toolbar className="container flex items-center justify-between">
          <div className="flex items-center justify-center gap-x-4  lg:mx-6">
            <Typography>Movies</Typography>
            <div className="bg-slate-800 hover:bg-opacity-50 p-1 flex items-center justify-center   rounded-lg  ">
              <Search
                className="text-fontPrimary"
                onClick={() => setOpenSearch(!openSearch)}
              />
              <InputBase
                placeholder="search"
                value={searchValue}
                className={
                  openSearch
                    ? "text-fontPrimary  md:flex  ml-2"
                    : "text-fontPrimary hidden md:flex  ml-2"
                }
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <ArrowForward
                className={
                  openSearch
                    ? "flex cursor-pointer"
                    : "hidden sm:flex cursor-pointer"
                }
                onClick={() => submitSearchHandler()}
              />
            </div>
          </div>
          <div className="flex items-center justify-center lg:mx-6">
            <div className="hidden md:flex md:items-center md:justify-center">
              <Tabs
                value={tabValue}
                onChange={(e, value) => {
                  setTabValue(value);
                }}
              >
                <Tab
                  value={0}
                  to="/playList"
                  component={RouterLink}
                  icon={<OndemandVideo className="text-fontPrimary " />}
                />
                <Tab
                  value={1}
                  to="/"
                  component={RouterLink}
                  icon={<Home className="text-fontPrimary " />}
                />
                <Tab
                  value={2}
                  icon={<AccountCircle className="text-fontPrimary " />}
                />
              </Tabs>
            </div>
            <div>
              <IconButton>
                <Button onClick={() => setOpenDrawer(true)}>
                  <MenuOutlined className="text-fontPrimary flex md:hidden" />
                </Button>
              </IconButton>
              <Drawer
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
              >
                <Box
                  sx={{
                    bgcolor: "#1a242f",
                    height: "100%",
                  }}
                >
                  <List>
                    <Link to="/playList">
                      <ListItem>
                        <ListItemButton sx={{ color: "white" }}>
                          <ListItemIcon>
                            <OndemandVideo sx={{ color: "white" }} />
                          </ListItemIcon>
                          <ListItemText primary="Playlist" />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                    <Link to="/">
                      <ListItem>
                        <ListItemButton sx={{ color: "white" }}>
                          <ListItemIcon>
                            <Home sx={{ color: "white" }} />
                          </ListItemIcon>
                          <ListItemText primary="Home" />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                    <ListItem>
                      <ListItemButton
                        sx={{ color: "white" }}
                        onClick={() => setOpenProfile(!openProfile)}
                      >
                        <ListItemIcon>
                          <AccountCircle sx={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Profile" sx={{ pr: 4 }} />
                        {openProfile ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                    </ListItem>
                  </List>
                  <Divider />
                  <Collapse timeout="auto" unmountOnExit in={openProfile}>
                    <List>
                      <ListItem>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <Logout sx={{ color: "white" }} />
                          </ListItemIcon>
                          <ListItemText
                            sx={{ color: "white" }}
                            primary="LogOut"
                          />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Collapse>
                </Box>
              </Drawer>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
