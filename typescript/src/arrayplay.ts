export class ArrayPlay {
  genrateRandomArray(length: number, range: number) {
    let genratedArray: number[] = [];
    for (let whatever = 0; whatever < length; whatever++) {
      genratedArray.push(Math.floor(Math.random() * range));
    }
    console.log(genratedArray);
    return genratedArray;
  }
  greatestMultiplier(incomingArray: number[]) {
    let largestNum: number = 0;
    let largestNumPosition: number[] = [];
    incomingArray.forEach((x, y) => {
      incomingArray.forEach((a, b) => {
        if (y != b) {
          if (x * a > largestNum) {
            largestNum = x * a;
            largestNumPosition = [y, b];
          }
        }
      });
    });
    console.log(largestNumPosition, largestNum);
    return `The largest Multiple is ${incomingArray[largestNumPosition[0]]} X ${
      incomingArray[largestNumPosition[0]]
    } = ${largestNum} @ ${largestNumPosition}`;
  }
  twoSum(nums: number[], target: number) {
    // https://leetcode.com/problems/two-sum
    let index1,
      index2: number = 0;
    Loop1: for (index1 = 0; index1 < nums.length; index1++) {
      for (index2 = 0; index2 < nums.length; index2++) {
        if (index1 != index2) {
          if (nums[index1] + nums[index2] == target) {
            return [index1, index2];
          }
        }
      }
    }
  }
  maxArea(height: number[]) {
    // https://leetcode.com/problems/container-with-most-water/
    let len: number = height.length;
    let area: number = 0;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        area = Math.max(area, Math.min(height[i], height[j]) * (j - i));
      }
    }
    return area;
  }
  threeSum(nums: number[]) {
    // FIXME: little bit mistake
    // https://leetcode.com/problems/3sum/
    let solutionSet: number[][] = [];
    // make a checkList for array
    let checkList: boolean[] = [];
    for (let rubbish1 = 0; rubbish1 < nums.length; rubbish1++) {
      checkList.push(true);
    }
    // Main process
    for (let a = 0; a < nums.length; a++) {
      for (let b = 0; b < nums.length; b++) {
        for (let c = 0; c < nums.length; c++) {
          if (a != b && b != c && c != a && nums[a] + nums[b] + nums[c] == 0) {
            if (
              checkList[a] == true &&
              checkList[b] == true &&
              checkList[c] == true
            ) {
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
  }
  threeSumClosest(nums: number[], target: number) {
    // https://leetcode.com/problems/3sum-closest/
    nums.sort((a, b) => a - b);
    let ans = null;
    for (let a = 0; a < nums.length - 2; a++) {
      for (let b = a + 1; b < nums.length - 1; b++) {
        for (let c = b + 1; c < nums.length; c++) {
          let psudoAns = nums[a] + nums[b] + nums[c];
          if (ans === null) {
            ans = psudoAns;
          }
          if (Math.abs(ans - target) > Math.abs(psudoAns - target)) {
            ans = psudoAns;
          } else if (ans < psudoAns) {
            break;
          }
        }
      }
    }
    return ans;
  }
}
