import LeetCode from "./leetcode";
import ProjectEular from "./projecteuler";
// use Class as an Object
let leetcodeprogram = new LeetCode();
let projecteularprogram = new ProjectEular();
console.clear();
// log time
console.time("Solution");
projecteularprogram.four();
console.timeEnd("Solution");