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
app.use(express.urlencoded({ extended: false }));

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST, 
  database: "cakedb",
  password: process.env.DB_PASS,
  port: 5432,
});
 
// TEST: get request for all cakes from data.js
// app.get("/cakes", function (req, res) {
//   // res.send("Hello World!");
//   console.log(detail.data)
//   // res.send(detail.data[0]);
// res.json(detail.data)
// });

// get request for all cakes
app.get("/cakes", function (req, res) {
  pool
    .query("SELECT * FROM cakes ORDER BY name")
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
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

//get request for a customer//
app.get("/customer", function (req, res) {
 
  // let customerQuery = `SELECT * FROM customers WHERE name='John Smith'`
  let customerQuery = "SELECT * FROM customers WHERE id = 4" 
  pool
    .query(customerQuery)
    .then((result) => res.json(result.rows[0]))
    .catch((e) => console.error(e));
}); 

// get one selected customer
app.get("/customer/:id", function (req, res) {
  const {id} = req.params;
 
  let customerQuery = "SELECT name FROM customers WHERE id=$1"
  pool
    .query(customerQuery, [id])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

app.listen(3001, function () {
  console.log("Server is listening on port 3001. Ready to accept requests!");
}); 