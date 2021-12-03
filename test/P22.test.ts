import { solver } from "../src/P22";
import { puzzleInput } from "../src/inputs/P2";

const input = [
  { action: "forward", value: 5 },
  { action: "down", value: 5 },
  { action: "forward", value: 8 },
  { action: "up", value: 3 },
  { action: "down", value: 8 },
  { action: "forward", value: 2 }
];

test("Day 2 - 1: Example ", () => {
  expect(solver(input)).toBe(900);
});

test("Day 2 - 1: Actual ", () => {
  expect(solver(puzzleInput)).toBe(2101031224);
});
