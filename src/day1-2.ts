const puzzleInput = [];
let answer = 0;

// for (let index = 1; index < puzzleInput.length; index++) {
//   const curr = puzzleInput[index];
//   const prev = puzzleInput[index - 1];
//   if (curr > prev) {
//     answer++;
//   }
// }

let prev = 173;
puzzleInput.forEach((curr) => {
  if (curr > prev) {
    answer++;
  }
  prev = curr;
});

document.getElementById("day1-2").innerHTML = "Day 1-2: " + answer.toString();
