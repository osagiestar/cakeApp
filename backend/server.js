const express = require("express");
const app = express();


app.get("/cakes", function (req, res) {
  res.send(item);
});



app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});