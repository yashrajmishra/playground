export default class LeetCode {
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
              console.log(a, b, c);
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
  merge(intervals: number[][]) {
    //FIXME: Still A minor mistake
    // https://leetcode.com/problems/merge-intervals/
    let answer: number[][] = [];
    Loop1: for (let inters1 = 0; inters1 < intervals.length; inters1++) {
      Loop2: for (let inters2 = 0; inters2 < intervals.length; inters2++) {
        if (inters1 != inters2) {
          if (
            intervals[inters1][1] > intervals[inters2][0] &&
            intervals[inters1][1] < intervals[inters2][1]
          ) {
            console.log(intervals[inters1], intervals[inters2]);
            answer.push([intervals[inters1][0], intervals[inters2][1]]);
            break Loop2;
          }
          if (!answer.includes(intervals[inters1])) {
            answer.push(intervals[inters1]);
            console.log();
          }
        }
      }
    }
    return answer;
  }
  sortColors(nums: number[]) {
    nums.sort((a, b) => a - b);
    return nums;
  }
  maximumGap(nums: number[]) {
    //https://leetcode.com/problems/maximum-gap/
    let maxDiff: number = 0;
    if (nums.length >= 2) {
      nums.sort((a, b) => a - b);
      for (let i = 1; i < nums.length; i++) {
        if (Math.abs(nums[i - 1] - nums[i]) > maxDiff) {
          maxDiff = Math.abs(nums[i - 1] - nums[i]);
        }
      }
    }
    return maxDiff;
  }
  containsNearbyAlmostDuplicate(nums: number[], k: number, t: number) {
    // https://leetcode.com/problems/contains-duplicate-iii/
    let ans: boolean = false;
    let numsLength: number = nums.length;
    Loop1: for (let i = 0; i < numsLength; i++) {
      Loop2: for (let j = 1; j < numsLength; j++) {
        if (i === j) {
          break Loop2;
        } else {
          if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
            ans = true;
            break Loop1;
          }
        }
      }
    }
    return ans;
  }
  isAnagram(s: string, t: string) {
    //https://leetcode.com/problems/valid-anagram/
    let ans: boolean = false;
    if (s.length != t.length) return ans;
    let array1: string = s.split("").sort().join("");
    let array2: string = t.split("").sort().join("");
    if (array1 == array2) ans = true;
    return ans;
  }
  hIndex(citations: number[]) {
    //https://leetcode.com/problems/h-index/submissions/
    //FIXME: Wrong output for [0,1]
    let cHIndex: number = 0;
    let citationLength: number = citations.length;
    citations.sort((a, b) => b - a);
    for (let i = 0; i < citationLength; i++) {
      let count = citationLength - i;
      if (citations[i] >= count) cHIndex = count;
      else {
        if (i == 0) cHIndex = citations[i];
        console.log("break at ", i);
        break;
      }
    }
    console.log(citations);
    return cHIndex;
  }
  intersection(nums1: number[], nums2: number[]) {
    //https://leetcode.com/problems/intersection-of-two-arrays/
    let answer: number[] = [];
    let arrayLength1: number = nums1.length;
    let arrayLength2: number = nums2.length;
    Loop1: for (let i = 0; i < arrayLength1; i++) {
      for (let j = 0; j < arrayLength2; j++) {
        if (nums1[i] == nums2[j]) {
          if (answer.includes(nums1[i])) continue Loop1;
          answer.push(nums1[i]);
        }
      }
    }
    return answer;
  }
  lengthOfLongestSubstring(s: string) {
    //https://leetcode.com/problems/longest-substring-without-repeating-characters/
    let lengthOfSubstring: number = 0;
    let lengthOfString: number = s.length;
    let hashMap = new Map();

    for (let j = 0, i = 0; j < lengthOfString; j++) {
      if (hashMap.has(s.charAt(j))) {
        i = Math.max(hashMap.get(s.charAt(j)), i);
      }
      lengthOfSubstring = Math.max(lengthOfSubstring, j - i + 1);
      hashMap.set(s.charAt(j), j + 1);
    }
    return lengthOfSubstring;
  }
  zigzagconvert(s: string, numRows: number) {
    //https://leetcode.com/problems/zigzag-conversion/submissions/
    //FIXME: A little bit mistake and aproach can be optimised
    if (numRows == 1) {
      return s;
    }
    let ans: string[] = [];
    let row: number = 0;
    let column: number = 0;
    let tick: boolean = true;
    let stringMap = new Map();
    let testArray: number[][] = [];
    for (let i = 0; i < s.length; i++) {
      stringMap.set([row, column], s[i]);
      console.log(s[i], row, column);
      row += tick ? 1 : -1;
      if (tick) {
        tick = row <= numRows - 1 ? true : false;
      } else {
        tick = row == 0 ? true : false;
        column++;
      }
    }
    stringMap.forEach((a, b) => {
      testArray.push(b);
    });
    testArray.sort();
    console.log(testArray);
    testArray.forEach((x) => {
      ans.push(stringMap.get(x));
    });
    console.log(stringMap);
    return ans.join("");
  }
  myAtoi(str: string) {
    //https://leetcode.com/problems/string-to-integer-atoi/
    //LOOK HERE: this can be done
    let ans: number = 1;
    let stringLength: number = str.length;
    console.log(str.charCodeAt(2));
    for (let i = str.length - 1, j = 1; i >= 0; i--, j *= 10) {
      if (48 <= str.charCodeAt(i) && str.charCodeAt(i) <= 57) {
        // ans += str[i] * j;
        console.log(str[i]);
      } else {
      }
      // console.log(str[i], j);
    }
    return ans;
  }
}
