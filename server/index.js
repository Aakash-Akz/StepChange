const express = require("express");
const cors = require("cors");
const app = express();
const apiRoutes = require("./routes/api");
const connectDB = require('./config/db');

app.use(express.json());

const PORT = 3000;

// Other middleware and routes...
app.use(cors());

connectDB();
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
