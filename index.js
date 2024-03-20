#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter the first number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter the second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "select one of the operator",
        type: "list",
        name: "operater",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditinal statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operater === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operater === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operater === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please choice a valid operation");
}
console.log("finished");
