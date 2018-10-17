var inquirer = require("inquirer");


inquirer.prompt([
    {
        type: "input",
        message: "What is your Guess?",
        name: "yourGuess"
    }
]).then(answers =>{

    console.log(answers.yourGuess)
})

