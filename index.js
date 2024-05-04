#! /usr/bin/env node
// Import the 'inquirer' module
import inquirer from "inquirer";
import chalk from "chalk";
console.log("\t", "======================================");
console.log(chalk.magenta("\t", "<<<<< WELCOME TO WORD COUNTER >>>>>>"));
console.log("\t", "======================================");
// Declare a constant 'answer' and assign it to the result of inquirer.promt function
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.yellow("\t", "Enter your para to count the words:")
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(chalk.red(`\n\t Your para is consist of ${words.length} words.`));
