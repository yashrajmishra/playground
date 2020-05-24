"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayPlay = void 0;
var ArrayPlay = /** @class */ (function () {
    function ArrayPlay(incomingArray) {
        this.incomingArray = incomingArray;
    }
    ArrayPlay.prototype.genrateRandomArray = function () {
        var genratedArray = [];
        for (var whatever = 0; whatever < 10; whatever++) {
            genratedArray.push(Math.floor(Math.random() * 100));
        }
        console.log(genratedArray);
        return genratedArray;
    };
    ArrayPlay.prototype.getArray = function () {
        console.log(this.incomingArray);
        return this.incomingArray;
    };
    ArrayPlay.prototype.greatestMultiplier = function () {
        var _this = this;
        var largestNum = 0;
        var largestNumPosition = [];
        this.incomingArray.forEach(function (x, y) {
            _this.incomingArray.forEach(function (a, b) {
                if (y != b) {
                    if (x * a > largestNum) {
                        largestNum = x * a;
                        largestNumPosition = [y, b];
                    }
                }
            });
        });
        console.log(largestNumPosition, largestNum);
        return "The largest Multiple is " + this.incomingArray[largestNumPosition[0]] + " X " + this.incomingArray[largestNumPosition[0]] + " = " + largestNum + " @ " + largestNumPosition;
    };
    return ArrayPlay;
}());
exports.ArrayPlay = ArrayPlay;
