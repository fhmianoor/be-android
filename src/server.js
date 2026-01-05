const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.use("/api", userRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
