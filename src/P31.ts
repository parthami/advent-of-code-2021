import _ from "lodash";

class DiagnosticReport {
  gammaRate: string;
  epsilonRate: string;

  constructor() {
    this.gammaRate = "";
    this.epsilonRate = "";
  }

  solve(): number {
    return parseInt(this.gammaRate, 2) * parseInt(this.epsilonRate, 2);
  }

  count(arr: Array<number>, target: number) {
    return arr.reduce((prev, curr, i, a) => {
      return curr === target ? prev + 1 : prev;
    }, 0);
  }

  mostCommon(arr: Array<number>) {
    const oneBitCount = this.count(arr, 1);
    const zeroBitCount = this.count(arr, 0);

    return oneBitCount > zeroBitCount ? 1 : 0;
  }

  calculateGammaRate(arr: Array<Array<number>>) {
    const rawGammaRate = arr.map((arr) => this.mostCommon(arr)).join("");
    this.gammaRate = rawGammaRate;
  }

  calculateEpsilonRate() {
    this.epsilonRate = this.gammaRate
      .split("")
      .map((i) => 1 - +i)
      .join("");
  }
}

export function solver(puzzleInput: Array<string>) {
  const splitArray = puzzleInput.map((binarynumber: string) => {
    return binarynumber.split("").map((n: string) => +n);
  });
  let transposedArray = _.zip(...splitArray);

  const diagnosticReport = new DiagnosticReport();

  diagnosticReport.calculateGammaRate(transposedArray);
  diagnosticReport.calculateEpsilonRate();

  return diagnosticReport.solve();
}
