document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("http://localhost:3000/recipes");
  const recipes = await response.json();


  const recipeList = document.querySelector("#recipes-list"); // match HTML id

  for (const recipe of recipes) {
    const recipeContainer = document.createElement("div");

    const nameTag = document.createElement("h3");
    nameTag.innerText = recipe.name;
    recipeContainer.appendChild(nameTag);

    const islandTag = document.createElement("p");
    islandTag.innerText = "Repping - " + recipe.island;
    recipeContainer.appendChild(islandTag);

    const cuisineTag = document.createElement("p");
    cuisineTag.innerText = "Repping - " + recipe.cuisine;
    recipeContainer.appendChild(cuisineTag);

    const subcuisineTag = document.createElement("p");
    subcuisineTag.innerText = "Repping - " + recipe.subcuisine;
    recipeContainer.appendChild(subcuisineTag);

    const timeTag = document.createElement("p");
    timeTag.innerText = recipe.time;
    recipeContainer.appendChild(timeTag);

    // ingredients (keep tutorial single <li> style, but join array)
    const ingredientsListTag = document.createElement("ul");

    for (const ingredient of recipe.ingredients) {
        const ingredientsListItemTag = document.createElement("li");
        ingredientsListItemTag.innerText = ingredient;
        ingredientsListTag.appendChild(ingredientsListItemTag);

    }

    recipeContainer.appendChild(ingredientsListTag);

    recipeContainer.appendChild(document.createElement("br"));

    // steps
    const stepsListTag = document.createElement("ol");
    for (step of recipe.steps) {
        const stepsListItemTag = document.createElement("li");
        stepsListItemTag.innerText = step;
        stepsListTag.appendChild(stepsListItemTag);
    }

    recipeContainer.appendChild(stepsListTag);

    recipeList.appendChild(recipeContainer);
  }

  const recipeForm = document.querySelector("form");
  recipeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newRecipe = {};

    newRecipe.name = event.target.name.value;
    newRecipe.island = event.target.island.value;
    newRecipe.time = event.target.time.value;

    const ingredientsText = event.target.ingredients.value;
    newRecipe.ingredients = ingredientsText.split(/\r?\n/);

    const stepsText = event.target.steps.value;
    newRecipe.steps = stepsText.split(/\r?\n/);

    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" },
      body: JSON.stringify(newRecipe)
    })
  })
});



