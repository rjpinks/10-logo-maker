const { Triangle, Circle, Square, renderSvg } = require("./index.js");

describe("Circle", () => {
    test("Tests for the fill color of the circle", () => {
      const expectedResult =  `<!DOCTYPE html>
        <html>
        <body>
        
        <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200">
          <circle r="100" cx="100" cy="100" fill="green" stroke="black"/>
          <text x="80" y="110" fill="black">SVG</text>
        </svg>
        
        </body>
        </html>`;
      const circle = new Circle("green", "SVG");
      expect(circle).toEqual(expectedResult);
    })
});