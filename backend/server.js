const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const detail = require('./data.js')
 
app.get("/cake", function (req, res) {
  // res.send("Hello World!");
  console.log(detail.data[0])
  // res.send(detail.data[0]);
res.send(detail.data[0])
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});