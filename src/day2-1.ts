class SubmarineMovement {
  horizontalPosition: number;
  depth: number;

  constructor() {
    this.horizontalPosition = 0;
    this.depth = 0;
  }

  forward(x: number) {
    this.horizontalPosition = this.horizontalPosition + x;
  }

  down(x: number) {
    this.depth = this.depth + x;
  }

  up(x: number) {
    this.depth = this.depth - x;
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
