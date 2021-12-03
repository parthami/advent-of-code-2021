import { solver } from "../src/P12";
import { puzzleInput } from "../src/inputs/P1";

const exampleInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

test("Day 1 - 2 Example ", () => {
  expect(solver(exampleInput)).toBe(5);
});

test("Day 1 - 2 Answer ", () => {
  expect(solver(puzzleInput)).toBe(1543);
});
