import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from "@mui/material";

import {
  Dashboard,
  People,
  Payments,
  Message,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo1.png";

const expandedWidth = 260;
const collapsedWidth = 80;

const menuItems = [
  {
    title: "Dashboard",
    icon: <Dashboard />,
    path: "/admin/dashboard",
  },
  {
    title: "Users",
    icon: <People />,
    path: "/admin/users",
  },
  {
    title: "Donations",
    icon: <Payments />,
    path: "/admin/donations",
  },
  {
    title: "Messages",
    icon: <Message />,
    path: "/admin/messages",
  },
];

export default function Sidebar({
  mobileOpen,
  handleDrawerToggle,
  collapsed,
  setCollapsed,
}) {
  const location = useLocation();

  const drawerContent = (
    <Box>
      {/* LOGO */}

      <Toolbar
        sx={{
          display: "flex",
          justifyContent: collapsed ? "center" : "space-between",

          alignItems: "center",

          px: 2,
        }}
      >
        {!collapsed && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: 100,
                height: 60,
              }}
            />
          </Box>
        )}

        <IconButton
          onClick={() => setCollapsed(!collapsed)}
          sx={{ color: "#fff" }}
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </Toolbar>

      {/* MENU */}

      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.title}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              mx: 1,
              mb: 1,
              borderRadius: 3,

              justifyContent: collapsed ? "center" : "flex-start",

              px: 2,

              "&.Mui-selected": {
                background: "#2563eb",
              },

              "&:hover": {
                background: "#1e293b",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "#fff",
                minWidth: collapsed ? "unset" : 40,
              }}
            >
              {item.icon}
            </ListItemIcon>

            {!collapsed && <ListItemText primary={item.title} />}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* MOBILE DRAWER */}

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: {
            xs: "block",
            md: "none",
          },

          "& .MuiDrawer-paper": {
            width: expandedWidth,
            background: "#0f172a",
            color: "#fff",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* DESKTOP DRAWER */}

      <Drawer
        variant="permanent"
        sx={{
          display: {
            xs: "none",
            md: "block",
          },

          width: collapsed ? collapsedWidth : expandedWidth,

          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: collapsed ? collapsedWidth : expandedWidth,

            transition: "0.3s",

            overflowX: "hidden",

            boxSizing: "border-box",

            background: "#0f172a",

            color: "#fff",

            border: "none",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
