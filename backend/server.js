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
 
// TEST: get request for all cakes
app.get("/cakes", function (req, res) {
  // res.send("Hello World!");
  console.log(detail.data)
  // res.send(detail.data[0]);
res.send(detail.data)
}); 

// get request for all cakes
app.get("/cakes", function (req, res) {
  
res.send(detail.data)
}); 

//get request for a cake
app.get("/cakes/:cake_id", (req, res) => {
  const cake_id = req.params.cake_id;
  pool
  .query("SELECT * FROM cakes WHERE id=$1", [cake_id])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});
 
// post to create a cake 
app.post("/cakes/add",  async(req, res) => {
  try {
    const {name, price} = req.body;
    const newCake = await pool.query(
      "INSERT INTO cakes(name, price) VALUES($1, $2)", [name, price]
    )
    res.json(newCake.rows)
    } 
    catch (err) {
      console.log(err)
    // alert (err) 
  }
})


app.listen(3003, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});