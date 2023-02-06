const express = require("express")
const { Pool } = require("pg");

const app = express()
const PORT = process.env.PORT || 3000 
const pool = new Pool({
    connectionString: "postgresql://masterinfo:RC5w3xAZZ-ni06VMKfgBlQ@nylon-sponge-8787.7tt.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full",
    ssl: true
});

app.set("view engine", "ejs")

app.get("/", async (req, res) => {
    const client = await pool.connect();
	result = await client.query(`SELECT * FROM scoreboard;`);
	result = result.rows;
    
    const dbAsaScore = parseInt(result[0]['score']);
    const dbMarkScore = parseInt(result[1]['score']);
    console.log('pooped myself')

    // check the status code before rendering and give it a delay
    res.render("index", {asascore:dbAsaScore, markscore:dbMarkScore});
    client.release();
})

app.get("/asa69", async (req, res) => {
    const client = await pool.connect();
	result = await client.query(`SELECT score FROM scoreboard;`);
	result = result.rows;

    const dbAsaScore = parseInt(result[0]['score']);
    const dbAsaScoreUpdated = dbAsaScore + 1;
    result = await client.query(`UPDATE scoreboard SET score = ${dbAsaScoreUpdated} WHERE person = 'asa';`);

    client.release();
})

app.get("/mark69", async (req, res) => {
    const client = await pool.connect();
	result = await client.query(`SELECT score FROM scoreboard;`);
	result = result.rows;

    const dbMarkScore = parseInt(result[1]['score']);
    const dbMarkScoreUpdated = dbMarkScore + 1;
    result = await client.query(`UPDATE scoreboard SET score = ${dbMarkScoreUpdated} WHERE person = 'mark';`);

    client.release();
})

app.listen(PORT)