// Define constants
const { Select } = require('enquirer');
const chalk = require("chalk");

// Changing variables
let lang = require("./lang/en.json")

// Stored prompts
const startMode_p = {
    message: 'Select start mode',
    choices: ['Regular', 'Debug']
}

// Welcome prompt
console.clear();
console.log(chalk.bold("👋 Welcome to da-readme-generator\n"));

new Select(startMode_p).run().then(answer => console.log('Answer:', answer)).catch(console.error);

