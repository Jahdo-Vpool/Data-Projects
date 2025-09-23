//  Imports (Node.js modules)
const cors = require("cors");

// Express is a framework that makes it easier to build web servers in Node.js
const express = require("express");

// fs (file system) lets us read/write files on disk.
// here we use the "promises" version so we can use async/await instead of callbacks...Because we ain't Drake
const fs = require("fs").promises;

// path helps us work with file paths in a safe way across operating systems
const path = require("path");

// ------------------------------------------------------------------------------------------------
//  The setup

// Create an Express app (this is our web server)
const app = express();
// enable CORS for all routes
app.use(cors());

// Port number our server will listen on (visit http://localhost:3000)
const port = 3000;

// Full file path to our recipes JSON file
// __dirname is the current folder; we "join" it with the file name
const recipesFilePath = path.join(__dirname, "cari_recipes.json");



// ------------------------------------------------------------------------------------------------
// GET /recipes

// create a landing message
app.get('/', (req, res) => {
    res.send("Hello world! And welcome to the random food generator - Caribbean Edition!");
});

// Purpose: read the entire recipes file and return all recipes as JSON
app.get('/recipes', async (req, res) => {
    try {
        // Read the recipes file as text (utf-8 = string format instead of raw bytes)
        const data = await fs.readFile(recipesFilePath, "utf-8");

        // Convert the string into a real JavaScript array/object
        const recipes = JSON.parse(data);

        // Send the recipes back as JSON to the client
        res.json(recipes);
    } catch (err) {
        // If something goes wrong (file not found, invalid JSON, etc.), log the error
        console.error(err);

        // Send a "500 Internal Server Error" response with a helpful message
        res.status(500).json({ error: "Could not load recipes" });
    }
});

// ------------------------------------------------------------------------------------------------
// GET /random

/**
 * GET /random
 * This endpoint returns ONE random recipe.
 *
 * Optional filters (passed as query parameters in the URL):
 *   - cuisine: e.g. /random?cuisine=caribbean
 *   - island: e.g. /random?island=anguilla
 *   - subcuisine: e.g. /random?subcuisine=anguillian
 *
 * Example:
 *   http://localhost:3000/random?island=jamaica
 */

app.get("/random", async (req, res) => {
    try {
        // Step 1: Read and parse the recipes file
        const data = await fs.readFile(recipesFilePath, "utf8");
        let recipes = JSON.parse(data);

        // Step 2: Read query parameters (user input from the URL)
        // Example: /random?island=jamaica → req.query.island = "jamaica"
        // || "" means "if nothing was provided, use an empty string"
        // .toLowerCase() makes it case-insensitive ("Jamaica" = "jamaica")
        // .trim() removes extra spaces
        const cuisine = (req.query.cuiine || "").toLowerCase().trim();
        const island = (req.query.island || "").toLowerCase().trim();
        const subcuisine = (req.query.subcuisine || "").toLowerCase().trim();

        // Step 3: Apply filters (narrow down the recipes list)
        if (cuisine) {
            recipes = recipes.filter(r => (r.cuisine || "").toLowerCase() === cuisine);
        }

        if (island) {
            recipes = recipes.filter(r => (r.island || "").toLowerCase() === island);
        }

        if (subcuisine) {
            recipes = recipes.filter(r => (r.subcuisine || "").toLowerCase() === subcuisine);
        }

        // Step 4: If no recipes matched the filters, return a 404 Not Found
        if (!recipes.length) {
            return res.status(404).json({ error: "No recipes matched your filter." });
        }

        // Step 5: Pick a random recipe from the remaining list
        const random = recipes[Math.floor(Math.random() * recipes.length)];

        // Step 6: Send the random recipe back as JSON
        res.json(random);
    } catch (err) {
        // Log and handle unexpected errors
        console.error(err);
        res.status(500).json({ error: "Error selecting a random recipe" });
    }
});

// ------------------------------------------------------------------------------------------------
//  Start the server

// Listen on the chosen port and print a message when ready
app.listen(port, () => {
    console.log(`Hail up! The server is up and running on http://localhost:${port}`);
});





