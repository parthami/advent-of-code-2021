export function solver (puzzleInput: Array<number>) {
  let answer = 0;
  let prev = 173;

  puzzleInput.forEach((curr) => {
    if (curr > prev) {
      answer++;
    }
    prev = curr;
  });

  return answer;
}