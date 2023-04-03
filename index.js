const inquirer = require("inquirer");
const questions = [
    "How many letters would you like in your logo? (please only enter up to 3)",
    "Please enter a color keyword or a hexadecimal for the color of your logo.",
    "Please choose your desired shape: Circle, Triangle, or Square."
]

var createPrompts = function() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "numOfLetters"
            //if (numOfLetters != 1 || numOfLetters != 2 || numOfLetters != 3)
        },
        {
            type: "input",
            message: questions[1],
            name: "desiredColor"
        },
        {
            type: "input",
            message: questions[2],
            name: "desiredShape"
            //const upperShape = toUpperCase(desiredShape);
            //if (upperShape !== "CIRCLE" || upperShape !== "TRIANGLE" || upperShape !== " SQUARE")
        }
    ])
    .then((response) => {
        console.log("response", response);
    })
};

createPrompts();