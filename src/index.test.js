// import files
var add = require("./calculator/add");
var subtract = require("./calculator/subtract");
var multiply = require("./calculator/multiply");
var divide = require("./calculator/divide");

// Test Case 1 (Addition)
test("Should add two numbers", () => {
  expect(add(20, 10)).toBe(30);
});

// Test Case 2 (Subtraction)
test("Should subtract two numbers", () => {
  expect(subtract(20, 10)).toBe(10);
});

// Test Case 3 (Multiplication)
test("Should multiply two numbers", () => {
  expect(multiply(20, 10)).toBe(200);
});

// Test Case 4 (Division)
test("Should divide two numbers", () => {
  expect(divide(20, 10)).toBe(2);
});
