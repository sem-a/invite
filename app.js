const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(cors());

// Статические файлы
app.use(express.static("public"));

// Отправляем файл index.html при запросе к /
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Отправляем файл results.html при запросе к /results
app.get("/results", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "results.html"));
});

// Отправляем файл send.html при запросе к /send
app.get("/send", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "send.html"));
});

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", require("./routes/index"));

module.exports = app;