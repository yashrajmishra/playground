"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayplay_1 = require("./arrayplay");
// use Class as an Object
var customArray = new arrayplay_1.ArrayPlay();
//leatCode-Problems here
// log time
console.time("Solution");
customArray.threeSumClosest([-1, 2, 1, -4], 1);
console.timeEnd("Solution");
// log output
console.log(customArray.threeSumClosest([-1, 2, 1, -4], 1));
