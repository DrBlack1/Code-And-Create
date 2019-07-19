const app = require("../app.js");

// app.add(4, 4);

// test("should equal 10 when passed 5 and 5", () => {
//   expect(app.add(5, 5)).toEqual(10);
// });

// test("should equal 10 when passed 1 and 4", () => {
//   expect(app.calcAdder(1, 4)).toBe(10);
// });

// test("values to return andy and stuart", () => {
//   expect(
//     app.difference(["dan", "ben"], ["dan", "ben", "andy", "stuart"])
//   ).toEqual(["andy", "stuart"]);
// });

// test("expect to return 26 in 2019", () => {
//   expect(app.ageCalculator(1992, 2019)).toBeCl(26, 1);
// });

// test("sorted array", () => {
//   expect(app.arraySort.namessort()).toEqual([
//     "Ashley",
//     "Ben",
//     "Connor",
//     "Dan",
//     "Elishka"
//   ]);
// });

// test("sorted array", () => {
//   expect(app.arraySort.namessort()).toContain("Ben");
// });

// describe("group tests 1", () => {
//   expect(app.arraySort.namessort()).not.toEqual([
//     "Ashley",
//     "Ben",
//     "Connor",
//     "Alex",
//     "Elishka"
//   ]);

//   expect(app.arraySort.namessort()).not.toEqual([
//     "Ashley",
//     "Ben",
//     "Connor",
//     "Tom",
//     "Elishka"
//   ]);
// });

test("group tests 2", () => {
  expect(app.ageCalculator(1992, 2019)).toContain(26);
});
