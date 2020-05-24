"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayPlay = void 0;
var ArrayPlay = /** @class */ (function () {
    function ArrayPlay() {
    }
    ArrayPlay.prototype.genrateRandomArray = function (length, range) {
        var genratedArray = [];
        for (var whatever = 0; whatever < length; whatever++) {
            genratedArray.push(Math.floor(Math.random() * range));
        }
        console.log(genratedArray);
        return genratedArray;
    };
    ArrayPlay.prototype.greatestMultiplier = function (incomingArray) {
        var largestNum = 0;
        var largestNumPosition = [];
        incomingArray.forEach(function (x, y) {
            incomingArray.forEach(function (a, b) {
                if (y != b) {
                    if (x * a > largestNum) {
                        largestNum = x * a;
                        largestNumPosition = [y, b];
                    }
                }
            });
        });
        console.log(largestNumPosition, largestNum);
        return "The largest Multiple is " + incomingArray[largestNumPosition[0]] + " X " + incomingArray[largestNumPosition[0]] + " = " + largestNum + " @ " + largestNumPosition;
    };
    ArrayPlay.prototype.twoSum = function (nums, target) {
        // https://leetcode.com/problems/two-sum
        var index1, index2 = 0;
        Loop1: for (index1 = 0; index1 < nums.length; index1++) {
            for (index2 = 0; index2 < nums.length; index2++) {
                if (index1 != index2) {
                    if (nums[index1] + nums[index2] == target) {
                        return [index1, index2];
                    }
                }
            }
        }
    };
    ArrayPlay.prototype.maxArea = function (height) {
        // https://leetcode.com/problems/container-with-most-water/
        var len = height.length;
        var area = 0;
        for (var i = 0; i < len; i++) {
            for (var j = i + 1; j < len; j++) {
                area = Math.max(area, Math.min(height[i], height[j]) * (j - i));
            }
        }
        return area;
    };
    ArrayPlay.prototype.threeSum = function (nums) {
        // TODO: little bit mistake
        // https://leetcode.com/problems/3sum/
        var solutionSet = [];
        // make a checkList for array
        var checkList = [];
        for (var rubbish1 = 0; rubbish1 < nums.length; rubbish1++) {
            checkList.push(true);
        }
        // Main process
        for (var a = 0; a < nums.length; a++) {
            for (var b = 0; b < nums.length; b++) {
                for (var c = 0; c < nums.length; c++) {
                    if (a != b && b != c && c != a && nums[a] + nums[b] + nums[c] == 0) {
                        if (checkList[a] == true &&
                            checkList[b] == true &&
                            checkList[c] == true) {
                            // console.log(a, b, c);
                            solutionSet.push([nums[a], nums[b], nums[c]]);
                            checkList[a] = false;
                            checkList[b] = false;
                            checkList[c] = false;
                        }
                    }
                }
            }
        }
        console.log(checkList);
        return solutionSet;
    };
    ArrayPlay.prototype.threeSumClosest = function (nums, target) {
        // https://leetcode.com/problems/3sum-closest/
        nums.sort(function (a, b) { return a - b; });
        var ans = null;
        for (var a = 0; a < nums.length - 2; a++) {
            for (var b = a + 1; b < nums.length - 1; b++) {
                for (var c = b + 1; c < nums.length; c++) {
                    var psudoAns = nums[a] + nums[b] + nums[c];
                    if (ans === null) {
                        ans = psudoAns;
                    }
                    if (Math.abs(ans - target) > Math.abs(psudoAns - target)) {
                        ans = psudoAns;
                    }
                    else if (ans < psudoAns) {
                        break;
                    }
                }
            }
        }
        return ans;
    };
    return ArrayPlay;
}());
exports.ArrayPlay = ArrayPlay;
