import { solver } from "../src/P31";
import { puzzleInput } from "../src/inputs/P3";

const input = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010"
];

test("Day 3 - 1: Example ", () => {
  expect(solver(input)).toBe(198);
});

test.only("Day 3 - 1: Actual ", () => {
  expect(solver(puzzleInput)).toBe(1082324);
});
