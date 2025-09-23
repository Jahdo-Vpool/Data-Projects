document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("http://localhost:3000/recipes");
  const recipes = await response.json();


  const recipeList = document.querySelector("#recipes-list"); // match HTML id

  for (const recipe of recipes) {
    const recipeContainer = document.createElement("div");

    const nameTag = document.createElement("h3");
    nameTag.innerText = recipe.name;
    recipeContainer.appendChild(nameTag);

    const cuisineTag = document.createElement("p");
    cuisineTag.innerText = "Repping - " + recipe.island;
    recipeContainer.appendChild(cuisineTag);

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
});



