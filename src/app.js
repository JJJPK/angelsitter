"use strict";

//module
const express = require("express");
const app = express();

//routing
const home = require("./routes/home");

//setting app
app.set("views", "./views");
app.set("view engine", "ejs");


app.use("/", home); // use -> 미들 웨어 등록 메서드

module.exports = app;