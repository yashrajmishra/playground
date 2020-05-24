export class ArrayPlay {
  constructor(private incomingArray: number[]) {}
  genrateRandomArray() {
    let genratedArray: number[] = [];
    for (let whatever = 0; whatever < 10; whatever++) {
      genratedArray.push(Math.floor(Math.random() * 100));
    }
    console.log(genratedArray);
    return genratedArray;
  }
  getArray() {
    console.log(this.incomingArray);
    return this.incomingArray;
  }
  greatestMultiplier() {
    let largestNum: number = 0;
    let largestNumPosition: number[] = [];
    this.incomingArray.forEach((x, y) => {
      this.incomingArray.forEach((a, b) => {
        if (y != b) {
          if (x * a > largestNum) {
            largestNum = x * a;
            largestNumPosition = [y, b];
          }
        }
      });
    });
    console.log(largestNumPosition, largestNum);
    return `The largest Multiple is ${
      this.incomingArray[largestNumPosition[0]]
    } X ${
      this.incomingArray[largestNumPosition[0]]
    } = ${largestNum} @ ${largestNumPosition}`;
  }
}
