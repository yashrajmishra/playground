"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayplay_1 = require("./arrayplay");
const sortplay_1 = require("./sortplay");
// use Class as an Object
let customArray = new arrayplay_1.ArrayPlay();
let mySorting = new sortplay_1.SortPlay();
//leatCode-Problems here
// log time
// console.time("Solution");
// customArray.threeSumClosest([-1, 2, 1, -4],1);
// console.timeEnd("Solution");
// log output
console.log(mySorting.containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));
