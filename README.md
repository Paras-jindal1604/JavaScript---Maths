# 🧮 JavaScript Math Object & Random Number Generation

Welcome to the JavaScript Math Object repository!

This repo is your quick guide to mastering JavaScript’s built-in Math object — packed with useful methods for mathematical calculations and random number generation. 🎲


## 📌 Topics Covered

✅ Overview of the Math Object


🧠 Commonly Used Math Methods


🎲 Random Number Generation


🔁 Custom Range Generators


### ✅ What is the Math Object?

The Math object in JavaScript provides built-in mathematical constants and functions.


📌 It’s not a constructor, so you don’t use new Math() — just Math.method() directly.


### 🛠️ Commonly Used Math Methods


| Method              | Description                            | Example                   |
| ------------------- | -------------------------------------- | ------------------------- |
| `Math.abs(x)`       | Returns the absolute value of `x`      | `Math.abs(-5)` → `5`      |
| `Math.ceil(x)`      | Rounds `x` up to the nearest integer   | `Math.ceil(4.2)` → `5`    |
| `Math.floor(x)`     | Rounds `x` down to the nearest integer | `Math.floor(4.8)` → `4`   |
| `Math.round(x)`     | Rounds `x` to the nearest integer      | `Math.round(4.5)` → `5`   |
| `Math.pow(a, b)`    | Returns `a` raised to power `b`        | `Math.pow(2, 3)` → `8`    |
| `Math.sqrt(x)`      | Returns square root of `x`             | `Math.sqrt(16)` → `4`     |
| `Math.sign(x)`      | Returns sign of `x` (`-1`, `0`, `1`)   | `Math.sign(-42)` → `-1`   |



### 🔢 Math Constants


| Constant      | Description             |
| ------------- | ----------------------- |
| `Math.PI`     | 3.141592653589793       |
| `Math.E`      | Euler’s number (≈2.718) |
| `Math.SQRT2`  | Square root of 2        |
| `Math.LN2`    | Natural log of 2        |
| `Math.LOG10E` | Base-10 log of E        |



### 🎲 Random Number Generation

🔸 Math.random()  -  Generates a pseudo-random number between 0 (inclusive) and 1 (exclusive).

console.log(Math.random()); // e.g., 0.573849123

🔁 Random Numbers in Custom Ranges  -  1️⃣ Random Integer Between 0 and N (exclusive)


function getRandomUpTo(max) {
  return Math.floor(Math.random() * max);
}
getRandomUpTo(10); // 0 to 9


2️⃣ Random Integer Between Min and Max (inclusive)

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInRange(5, 15); // 5 to 15 inclusive



### 🙌 Contributing

Got a trick with Math.random() or a lesser-known method? Feel free to open a PR or issue!

