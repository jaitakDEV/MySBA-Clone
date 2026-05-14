import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  InputBase,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import SearchIcon from "@mui/icons-material/Search";

import NotificationMenu from "./NotificationMenu";

import ProfileMenu from "./ProfileMenu";

export default function Topbar({ handleDrawerToggle }) {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "#fff",
        color: "#000",
      }}
    >
      <Toolbar>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            display: {
              xs: "block",
              md: "none",
            },

            mr: 2,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            flexGrow: 1,
          }}
        >
          Dashboard
        </Typography>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },

            alignItems: "center",

            background: "#f1f5f9",

            px: 2,

            py: 0.5,

            borderRadius: 3,

            mr: 2,
          }}
        >
          <InputBase placeholder="Search..." />

          <SearchIcon />
        </Box>

        <NotificationMenu />

        <ProfileMenu />
      </Toolbar>
    </AppBar>
  );
}
