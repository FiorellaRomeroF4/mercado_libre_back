const express = require("express");
const apiRouter = require("./routes/api");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);

module.exports = app;
