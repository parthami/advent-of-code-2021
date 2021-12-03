import _ from "lodash";

export function solver(puzzleInput: Array<number>) {
  let reducedInput = puzzleInput.map((e, i, a) => {
    return e + a[i + 1] + a[i + 2];
  });

  reducedInput = _.compact(reducedInput);

  const ans = reducedInput.reduce((c, v, i, a) => {
    const match = v > a[i - 1] ? 1 : 0;
    return c + match;
  }, 0);

  return ans;
}
