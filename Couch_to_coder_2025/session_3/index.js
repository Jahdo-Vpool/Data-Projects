const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;
const recipesFilePath = path.join(__dirname, "recipes.json")

app.get('/', (req, res) => {
    res.send("Hello world and welcome to my page!");
});

app.get('/recipes', (req, res) => {
    // Read the JSON file
    fs.readFile(recipesFilePath, 'utf8', (err, data) => {
        // we read the file located at the filepath, encoding is utf8, and, just like req/res, we have an err/data variable
        // if we have something in the err variable, we could handle that with an if statement, for now, let's keep it simple
        // data will hold the data read in from the file
        // Parse the JSON data from the file, turning it into JSON data.
        const recipes = JSON.parse(data);
        // Send the recipes as JSON response
        res.json(recipes);
    })
});

app.post('/recipes', (req, res) => {
    res.send("We are sorting all your favorite recipes");
});

app.listen(port, () => {
    console.log("Server is up and running on http://localhost:",port)
});