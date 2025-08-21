// Weather Clothing Advisor
// Week 1 Couch to Coder Project
// Suggests what to wear based on the average temperature of the day

// Step 1: Store the high and low temps of the day in °C and calculate the average
const lowTemp = 12;  // Low temp of the day in °C
const highTemp = 30; // High temp of the day in °C

const averageTemp = (lowTemp + highTemp) / 2; // Calculate average temp

// Step 2: Check the temperature and give clothing advice
// Backticks create template literals
// ${} allows us to insert a variable or expression value directly into the string
if (averageTemp <= 0) {
    console.log(`It's ${averageTemp}°C — way too cold! Wear a coat, boots, gloves, and a hat.`);
} else if (averageTemp > 0 && averageTemp <= 10) {
    console.log(`It's ${averageTemp}°C — cold outside! Wear a warm jacket.`);
} else if (averageTemp > 10 && averageTemp <= 20) {
    console.log(`It's ${averageTemp}°C — cool weather. A sweater or light jacket will do.`);
} else if (averageTemp > 20 && averageTemp <= 30) {
    console.log(`It's ${averageTemp}°C — warm and pleasant. Light clothing like a t-shirt and shorts will do.`);
} else {
    console.log(`It's ${averageTemp}°C — extremely hot! Wear light clothes, stay in the shade, and drink a lot of water.`);
}

console.log("Remember: No matter the weather, it's always a good day to code & learn!");