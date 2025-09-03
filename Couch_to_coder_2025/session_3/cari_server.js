// Imports
const express = require("express");
const fs = require("fs");
const path = require("path");

// Define constants and app
const app = express();
const port = 3000;
const recipesFilePath = path.join(__dirname,"cari_recipes.json");

// converts json to js object
app.use(express.json())

// read and return all recipes
app.get('/recipes', async (req,res) => {
    // Use try and catch to prevent server from crashing when something goes wrong
    try {
        const data = await fs.readFile(recipesFilePath, "utf-8");
        const recipes = JSON.parse(data);
        res.json(recipes);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "Could not load recipes"});
    }
})

/**
 * GET /random
 * Optional filters:
 *   - cuisine: e.g. "caribbean" (default in this dataset)
 *   - island: e.g. "Anguilla" | "trinidad & tobago" | ...
 *   - subcuisine: e.g. "Anguillian", "haitian" (alias for island-style)
 */

app.get("/random", async (req,res) => {
    try {
        const data = await fs.readFile(recipesFilePath, "utf8");
        let recipes = JSON.parse(data);
        // Use req query to grab (key, value) pairs
        // || = OR operator. If no input was given then a blank is returned
        const cuisine = (req.query.cuisine || "").toLowerCase().trim();
        const island = (req.query.island || "").toLowerCase().trim();
        const subcuisine = (req.query.subcuisine || "").toLowerCase().trim();




    }

})




