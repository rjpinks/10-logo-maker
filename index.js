const inquirer = require("inquirer");
const fs = require("fs");
const Triangle = class Triangle {
    constructor(svgColor, svgLetters) {
        this.svgShape = 'polygon points="100,0 200,200 0,200"';
        this.svgColor = svgColor;
        this.svgLetters = svgLetters;
    }
}
const Square = class Square {
    constructor(svgColor, svgLetters) {
        this.svgShape = "rect";
        this.svgColor = svgColor;
        this.svgLetters = svgLetters;
    }
}
const Circle = class Circle {
    constructor(svgColor, svgLetters) {
        this.svgShape = "circle";
        this.svgColor = svgColor;
        this.svgLetters = svgLetters;
    }
}
const questions = [
    "Please enter up to 3 letters to use in your logo?",
    "Please enter a color keyword or a hexadecimal for the color of your logo.",
    "Please choose your desired shape: Circle, Triangle, or Square."
]

var createPrompts = function() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "desiredLetters"
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
        }
    ])
    .then((response) => {
        const upperShape = response.desiredShape.toUpperCase();
        const numOfLetters = response.desiredLetters.length;
        const usedLetters = response.desiredLetters;
        const usedColor = response.desiredColor;
        if (numOfLetters != 1 && numOfLetters != 2 && numOfLetters != 3) {
            console.log("You need to rerun the file. You did not enter a correct number of characters!");
        } else if (upperShape !== "CIRCLE" && upperShape !== "TRIANGLE" && upperShape !== "SQUARE") {
            console.log("You did not enter a correct shape. Try again!");
        } else if (upperShape === "CIRCLE") {
            const svgCirLogo = new Circle(usedColor, usedLetters);
            fs.writeFile("logo.svg", 
            `<!DOCTYPE html>
            <html>
            <body>
            
            <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200">
              <${svgCirLogo.svgShape} r="100" cx="100" cy="100" fill="${svgCirLogo.svgColor}" stroke="black"/>
              <text x="80" y="110" fill="black">${svgCirLogo.svgLetters}</text>
            </svg>
            
            </body>
            </html>`, 
            (err) => console.log(err));
        } else if (upperShape === "TRIANGLE") {
            const svgTriLogo = new Triangle(response.desiredColor, response.desiredLetters);
            fs.writeFile("logo.svg",
            `<!DOCTYPE html>
            <html>
            <body>
            
            <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200">
              <${svgTriLogo.svgShape} r="100" fill="fill:${svgTriLogo.svgColor};stroke:black;" />
              <text x="80" y="120" fill="black">${svgTriLogo.svgLetters}</text>
            </svg>
            
            </body>
            </html>`, 
            (err) => console.log(err));
        } else if (upperShape === "SQUARE") {
            const svgSqrLogo = new Square(response.desiredColor, response.desiredLetters);
            fs.writeFile("logo.svg",
            `<!DOCTYPE html>
            <html>
            <body>
            
            <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200">
              <${svgSqrLogo.svgShape} width="200" height="200" fill="${svgSqrLogo.svgColor}" stroke="black" />
              <text x="80" y="110" fill="black">${svgSqrLogo.svgLetters}</text>
            </svg>
            
            </body>
            </html>`, 
            (err) => console.log(err));
        };
    })
};

createPrompts();
