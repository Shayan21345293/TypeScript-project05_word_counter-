#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "ENTER UR SENTENCE TO COUNT THE WORD:"
    }]);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`UR SENTENCE WORD COUNT IS ${words.length}`);
