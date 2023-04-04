const { Triangle, Circle, Square, renderSvg } = require("./index.js");

//By testing to see if the classes make produce the right values, it will indicate that the logo.svg will be correctly rendered.
describe("Circle", () => {
    test("Tests for the fill color of the circle class", () => {
      const circle = new Circle("green", "SVG");
      const testedValue = circle.svgColor;
      const expectedResult =  "green";
      expect(testedValue).toEqual(expectedResult);
    })
});

describe("Triangle", () => {
  test("Tests for the letters desired of the triangle class", () => {
    const triangle = new Triangle("blue", "TST");
    const testedValue = triangle.svgLetters;
    const expectedResult =  "TST";
    expect(testedValue).toEqual(expectedResult);
  })
});

describe("Square", () => {
  test("Tests for the color desired of the square class", () => {
    const square = new Square("yellow", "HUH");
    const testedValue = square.svgColor;
    const expectedResult =  "yellow";
    expect(testedValue).toEqual(expectedResult);
  })
});

//These tests are no longer checking for indivisual values, but for the whole object.

describe("Circle", () => {
  test("Tests to see if the circle class produces proper object", () => {
    const circle = new Circle("green", "SVG");
    const expectedResult =  {"svgColor": "green", "svgLetters": "SVG", "svgShape": "circle"};
    expect(circle).toEqual(expectedResult);
  })
});

//The reason why svgShape for the triangle is not a literal shape is because this is the proper svg tag to produce the type of triangle that I want to use in the logos. Circle/rect exist for the square and circle tags, but this is not the case for the triangle.
describe("Triangle", () => {
  test("Tests to see if the triangle class produces proper object", () => {
    const triangle = new Triangle("red", "HI!");
    const expectedResult =  {"svgColor": "red", "svgLetters": "HI!", "svgShape": 'polygon points="100,0 200,200 0,200"'};
    expect(triangle).toEqual(expectedResult);
  })
});

//rect is the appropriate tag that we will insert into an HTML doc which is why it isn't like the circle example.
describe("Square", () => {
  test("Tests to see if the square class produces proper object", () => {
    const square = new Square("orange", "YOU");
    const expectedResult =  {"svgColor": "orange", "svgLetters": "YOU", "svgShape": 'rect'};
    expect(square).toEqual(expectedResult);
  })
});