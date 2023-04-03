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
    "How many letters would you like in your logo? (please only enter up to 3)",
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
        console.log("response", response);
        const upperShape = this.desiredShape.toUpperCase();
        if (upperShape === "CIRCLE") {
            const svgCirLogo = new Circle(this.desiredColor, this.desiredLetters);
            fs.writeFile("logo.svg",
            `<!DOCTYPE html>
            <html>
            <body>
            
            <svg height="200" width="200">
              <${svgCirLogo.svgShape} r="100" fill="fill:${svgCirLogo.svgColor};stroke:black;" />
              <text fill="black" stroke="white">${svgCirLogo.svgLetters}</text>
            </svg>
            
            </body>
            </html>`)
        } else if (upperShape === "TRIANGLE") {
            const svgTriLogo = new Triangle(this.desiredColor, this.desiredLetters);
            fs.writeFile("logo.svg",
            `<!DOCTYPE html>
            <html>
            <body>
            
            <svg height="200" width="200">
              <${svgTriLogo.svgShape} r="100" fill="fill:${svgTriLogo.svgColor};stroke:black;" />
              <text fill="black" stroke="white">${svgTriLogo.svgLetters} />
            </svg>
            
            </body>
            </html>`)
        } else if (upperShape === "SQUARE") {
            const svgSqrLogo = new Square(this.desiredColor, this.desiredLetters);
            fs.writeFile("logo.svg",
            `<!DOCTYPE html>
            <html>
            <body>
            
            <svg height="200" width="200">
              <${svgSqrLogo.svgShape} r="100" fill="fill:${svgSqrLogo.svgColor};stroke:black;" />
              <text fill="black" stroke="white">${svgSqrLogo.svgLetters} />
            </svg>
            
            </body>
            </html>`)
        };
        
        /*if (numOfLetters.length !== 1 || numOfLetters.length !== 2 || numOfLetters.length !== 3) {

        };*/
        //if (upperShape !== "CIRCLE" || upperShape !== "TRIANGLE" || upperShape !== " SQUARE") {};
    })
};

createPrompts();