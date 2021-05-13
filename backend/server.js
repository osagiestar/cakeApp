const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
// const detail = require('./data.js');
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

// // get request for all cakes
// app.get("/cakes", function (req, res) {
//   pool
//     .query("SELECT * FROM cakes ORDER BY name")
//     .then((result) => res.json(result.rows))
//     .catch((e) => console.error(e));
// }); 

//get request for a cake
app.get("/cakes/:cake_id", (req, res) => {
  const cake_id = req.params.cake_id;
  pool
    .query("SELECT * FROM cakes WHERE id=$1", [cake_id])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

// post to create a cake 
app.post("/cakes/add", async (req, res) => {
  try {
    const { name, price } = req.body;
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

// get a particular user by type and id
app.get("/sign-in/admin/:id", function(req, res) {
  const {id} = req.params;
  const userQuery = "SELECT * FROM users WHERE type='Admin' AND id=$1";
 pool
    .query(userQuery, [id])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

// get request for listing all customers
app.get("/customers/all", function (req, res) {
  let customerQuery = "SELECT * FROM customers"
  pool
    .query(customerQuery)
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

//get request for a customer by id//
app.get("/customers/:id", function (req, res) {
  const { id } = req.params;

  let customerQuery = "SELECT name FROM customers WHERE id=$1";
  pool
    .query(customerQuery, [id])
    .then((result) => res.json(result.rows[0]))
    .catch((e) => console.error(e));
});

app.listen(3002, function () {
  console.log("Server is listening on port 3002. Ready to accept requests!");
});