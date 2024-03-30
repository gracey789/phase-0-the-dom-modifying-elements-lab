/// Define a constant variable
const testVar = "hi";

// Remove the main element
document.querySelector("main#main").remove();

// Create a new header element
const newHeader = document.createElement("h1");

// Assign an id to the new header
newHeader.id = "victory";

// Set the inner HTML content of the new header
newHeader.innerHTML = "Flatiron School is the champion!";

// Assign a class name to the new header
newHeader.className = "victory";
