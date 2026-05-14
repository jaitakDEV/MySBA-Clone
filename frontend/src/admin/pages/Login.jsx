import { Box, Button, Paper, TextField, Typography } from "@mui/material";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // TEMP LOGIN

    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("adminToken", "admin123");

      navigate("/admin/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f1f5f9",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: 400,
          borderRadius: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={3} align="center">
          Admin Login
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: 3,
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
