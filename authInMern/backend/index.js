require("dotenv").config();
const connection = require("./db");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userRoutes = require("./routes/Users");
const clientRoutes = require("./routes/Client");
const authRoutes = require("./routes/Auth");
const serviceRoutes = require("./routes/Services");
const categoryRoutes = require("./routes/Categories");
const partRoutes = require("./routes/Parts");

const cors = require("cors");

// database connection
connection();

app.use(express.json());
app.use(cors());

//Middlewares

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/clients", clientRoutes);
app.use("/services", serviceRoutes);
app.use("/categories", categoryRoutes);
app.use("/parts", partRoutes);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}...`));
