const express = require("express");
const path = require("path");
const app = express();
var bodyParser = require("body-parser");
app.use(express.static(path.join(__dirname, "../", "dist")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../", "dist", "index.html"));
});
app.get("/testsh", function (req, res) {
  res.download("./termtest");
});
app.use("/cli", require("./routes"));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/data", function (req, res) {
  console.log(req.body);
  res.end();
});

app.listen(5000);
