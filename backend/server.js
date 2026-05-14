const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// DATABASE CONNECTION
require("./config/db");

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api", require("./routes/contactRoutes"));

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
