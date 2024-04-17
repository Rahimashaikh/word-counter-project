#! /usr/bin/env node


import inquirer from "inquirer";

const answers: {
    sentence: string 
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: " please enter your sentence to count your words: ",
    }
])

const words = answers.sentence.trim().split(" ")


console.log(words);

console.log(`your count words are ${words.length}`);





