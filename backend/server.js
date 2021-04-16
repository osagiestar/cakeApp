const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const detail = require('./data.js')
 
app.get("/cakes", function (req, res) {
  // res.send("Hello World!");
  console.log(detail.data)
  // res.send(detail.data[0]);
res.send(detail.data)
}); 

app.post("/cakes/add", function (req, res) {
  console.log(req.body)
  res.send("log")
})

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});