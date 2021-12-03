class SubmarineMovement {
  aim: number;
  horizontalPosition: number;
  depth: number;

  constructor() {
    this.horizontalPosition = 0;
    this.depth = 0;
    this.aim = 0;
  }

  forward(x: number) {
    this.horizontalPosition = this.horizontalPosition + x;
    this.depth = this.depth + x * this.aim;
  }

  down(x: number) {
    this.aim = this.aim + x;
  }

  up(x: number) {
    this.aim = this.aim - x;
  }

  solve() {
    return this.horizontalPosition * this.depth;
  }
}

export function solver(puzzleInput: Array<object>) {
  let sm = new SubmarineMovement();
  puzzleInput.forEach((moves) => {
    eval(`sm.${moves.action}(${moves.value})`);
  });
  return sm.solve();
}
