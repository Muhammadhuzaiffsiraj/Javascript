// Prompt the user for two numbers
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

// Add the two numbers
let sum = num1 + num2;

// Display the result using string interpolation
alert(`The sum of ${num1} and ${num2} is ${sum}`);

// Prompt the user for their name
let userName = prompt("What is your name?");

// Prompt the user for the total purchase amount
let purchaseAmount = parseFloat(prompt("Enter your total purchase amount:"));

// Calculate the discount amount
let discount = 10; // 10% discount
let discountAmount = (parseFloat(purchaseAmount) * discount) / 100;
let finalAmount = parseFloat(purchaseAmount) - discountAmount;

// Display the final amount after applying the discount
alert(`Hello ${userName}, your total after a ${discount}% discount is $${finalAmount.toFixed(2)}.`);

// Prompt the user for their favorite animal
let favoriteAnimal = prompt("What is your favorite animal?");

// Respond with a positive comment using string interpolation
alert(`Wow, ${favoriteAnimal}s are amazing creatures!`);
