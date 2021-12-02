import { solver } from "../src/day1-1";
import { puzzleInput } from "../src/day1Input";

test("Day 1 - 1: Example ", () => {
  expect(solver(puzzleInput)).toBe(1521);
});
