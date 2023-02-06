const express = require("express")
const { Pool } = require("pg");

const app = express()
const PORT = process.env.PORT || 3000 
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

app.set("view engine", "ejs")

app.get("/", async (req, res) => {
    const client = await pool.connect();
	result = await client.query(`SELECT * FROM score;`);
	result = result.rows;
    
    
    const dbAsaScore = "";
    const dbMarkScore = "";

    // check the status code before rendering and give it a delay

    res.render("index", {asascore:dbAsaScore, markscore:dbMarkScore});
})

app.get("/mark69", async (req, res) => {
    // connect to db and get the values add one to it and save it
    const client = await pool.connect();
	result = await client.query(`SELECT * FROM suggest;`);
	result = result.rows;

    
    res.send(result);
	client.release();
})

app.get("/asa69", async (req, res) => {
    
    // redirect back to normal page
})

app.listen(PORT)