const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000 

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    const ma = "woraaaaddld";
    res.render("index", {math:ma});
})

app.get("/mark69", (req, res) => {
    // connect to db and get the values add one to it and save it
})

app.get("/asa69", (req, res) => {
    
})

app.listen(PORT)