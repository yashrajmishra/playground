"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortPlay = void 0;
class SortPlay {
    merge(intervals) {
        // https://leetcode.com/problems/merge-intervals/
        let answer = [];
        Loop1: for (let inters1 = 0; inters1 < intervals.length; inters1++) {
            Loop2: for (let inters2 = 0; inters2 < intervals.length; inters2++) {
                if (inters1 != inters2) {
                    if (intervals[inters1][1] > intervals[inters2][0] &&
                        intervals[inters1][1] < intervals[inters2][1]) {
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
}
exports.SortPlay = SortPlay;
