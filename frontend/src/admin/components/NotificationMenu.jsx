import { Badge, IconButton, Menu, MenuItem, Typography } from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

import { useState } from "react";

export default function NotificationMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <Badge badgeContent={4} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        <MenuItem>New donation received</MenuItem>

        <MenuItem>New message received</MenuItem>

        <MenuItem>New user registered</MenuItem>
      </Menu>
    </>
  );
}
