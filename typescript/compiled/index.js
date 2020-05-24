"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayplay_1 = require("./arrayplay");
var sampleArray = [];
// Genrate a random array
for (var whatever = 0; whatever < 10; whatever++) {
    sampleArray.push(Math.floor(Math.random() * 100));
}
// use Class as an Object
var customArray = new arrayplay_1.ArrayPlay(sampleArray);
customArray.getArray();
console.log(customArray.greatestMultiplier());
