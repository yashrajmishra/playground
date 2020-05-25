import { ArrayPlay } from "./arrayplay";
import { SortPlay } from "./sortplay";
// use Class as an Object
let customArray = new ArrayPlay();
let mySorting = new SortPlay();

//leatCode-Problems here
// log time

// console.time("Solution");
// customArray.threeSumClosest([-1, 2, 1, -4],1);
// console.timeEnd("Solution");

// log output
console.log(mySorting.containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));
