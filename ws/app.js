const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "../", "dist")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../", "dist", "index.html"));
});
app.get("/download", function (req, res) {
  res.download("./testrc");
});
app.listen(8080);
