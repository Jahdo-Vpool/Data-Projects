const recipeList = document.querySelector("ul");

const titleTag = document.createElement("h1");
titleTag.textContent = "Spaghetti Carbonara";
const cuisineTag = document.createElement("p");
cuisineTag.textContent = "Cuisine: Italian";
const timeTag = document.createElement("p");
timeTag.textContent = "Time: 30 minutes"
const ingredientListTag = document.createElement("ul");
const ingredientListElementTag = document.createElement("li");
ingredientListElementTag.textContent = "Get all ingredients";
ingredientListTag.appendChild(ingredientListElementTag);

const stepListTag = document.createElement("ul");
const stepListElementTag = document.createElement("li");
stepListElementTag.textContent = "Do all the steps";
stepListTag.appendChild(stepListElementTag);

const recipe = document.createElement("li");
recipe.appendChild(titleTag);
recipe.appendChild(cuisineTag);
recipe.appendChild(timeTag);
recipe.appendChild(ingredientListTag);
recipe.appendChild(stepListTag);

recipeList.appendChild(recipe);