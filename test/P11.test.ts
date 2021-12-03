import { solver } from "../src/P11";
import { puzzleInput } from "../src/inputs/P1";

test("Day 1 - 1: Example ", () => {
  expect(solver(puzzleInput)).toBe(1521);
});
