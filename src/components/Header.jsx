import {
  AccountCircle,
  ExpandLess,
  ExpandMore,
  Home,
  Logout,
  MenuOutlined,
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
} from "react-router-dom";
import { Box } from "@mui/system";
import { useState } from "react";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

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
                className={
                  openSearch
                    ? "text-fontPrimary  md:flex  ml-2"
                    : "text-fontPrimary hidden md:flex  ml-2"
                }
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
                  to="/card"
                  component={RouterLink}
                  icon={<ShoppingBasket className="text-fontPrimary " />}
                />
                <Tab
                  to="/"
                  component={RouterLink}
                  icon={<Home className="text-fontPrimary " />}
                />
                <Tab icon={<AccountCircle className="text-fontPrimary " />} />
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
                    <ListItem>
                      <ListItemButton sx={{ color: "white" }}>
                        <ListItemIcon>
                          <ShoppingBasket sx={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Card" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton sx={{ color: "white" }}>
                        <ListItemIcon>
                          <Home sx={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                      </ListItemButton>
                    </ListItem>
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
