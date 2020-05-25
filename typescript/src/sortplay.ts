export class SortPlay {
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
            // console.log(intervals[inters1], intervals[inters2]);
            answer.push([intervals[inters1][0], intervals[inters2][1]]);
            break Loop2;
          }
          if (!answer.includes(intervals[inters1])) {
            answer.push(intervals[inters1]);
            // console.log();
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
    console.log(nums, k, t);
    Loop1: for (let i = 0; i < numsLength; i++) {
      Loop2: for (let j = 1; j < numsLength; j++) {
        if (i === j) {
          break Loop2;
        } else {
          if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
            console.log(nums[i], nums[j]);
            ans = true;
            break Loop1;
          }
        }
      }
    }
    return ans;
  }
}
