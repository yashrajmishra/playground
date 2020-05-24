import { ArrayPlay } from "./arrayplay";

// use Class as an Object
let customArray = new ArrayPlay();

//leatCode-Problems here
// log time
console.time("Solution");
customArray.threeSumClosest([-1, 2, 1, -4],1);
console.timeEnd("Solution");
// log output
console.log(customArray.threeSumClosest([-1, 2, 1, -4],1));
