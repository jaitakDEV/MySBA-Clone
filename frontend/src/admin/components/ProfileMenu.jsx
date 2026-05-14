import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Typography,
  Box,
} from "@mui/material";

import { useState } from "react";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");

    window.location.href = "/admin/login";
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Avatar
          sx={{
            width: 40,
            height: 40,
          }}
        >
          A
        </Avatar>
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Box sx={{ px: 2, py: 1 }}>
          <Typography fontWeight="bold">Admin</Typography>

          <Typography variant="body2" color="text.secondary">
            admin@gmail.com
          </Typography>
        </Box>

        <Divider />

        <MenuItem onClick={handleClose}>Profile</MenuItem>

        <MenuItem onClick={handleClose}>Settings</MenuItem>

        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}
