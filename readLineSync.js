
const readLineSync = require("readline-sync");

const userName = readLineSync.question("What is your name");

const age = readLineSync.question("What is your age");

console.log(`My name is ${userName} and age is ${age}`);