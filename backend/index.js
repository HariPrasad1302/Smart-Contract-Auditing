require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const userRoutes = require("./apis/user");

const app = express();

const jwt = require("jsonwebtoken");
const {authenticateToken} = require("./utilities");


app.use(
    cors({
        origin: "*",
    })
);

app.get("/", (req, res) =>{
    res.json({data:"hello"});
});
app.use(express.json());


//Api Routes
app.use("/user", userRoutes);

const connectionString = config.connectionString;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected");
        app.listen(8000, () => {
            console.log("Server is running on http://localhost:8000");
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

module.exports = app;
