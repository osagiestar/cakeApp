const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const detail = require('./data.js');
const { Pool } = require("pg");
require('dotenv').config()

// middleware 
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: "cakedb",
  password: process.env.DB_PASS,
  port: 5432,
});
 
// get request for all cakes
app.get("/cakes", function (req, res) {
  // res.send("Hello World!");
  console.log(detail.data)
  // res.send(detail.data[0]);
res.send(detail.data)
}); 

// post to create a cake
app.post("/cakes/add",  async(req, res) => {
  try {
    const {cakeDetails} = req.body;
    const newCakeItem = await pool.query(
      "INSERT INTO cakes (cakeDetails) VALUES($1)", [cakeDetails]
    )} 
    catch (err) {
    alert (err)
  }
  
  res.json(newCakeItem)
})



app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});