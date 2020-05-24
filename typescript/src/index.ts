import { ArrayPlay } from "./arrayplay";
let sampleArray: number[] = [];
// Genrate a random array
for (let whatever = 0; whatever < 10; whatever++) {
  sampleArray.push(Math.floor(Math.random() * 100));
}
// use Class as an Object
let customArray = new ArrayPlay(sampleArray);
customArray.getArray();

console.log(customArray.greatestMultiplier());
