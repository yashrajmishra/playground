"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const leetcode_1 = __importDefault(require("./leetcode"));
const projecteuler_1 = __importDefault(require("./projecteuler"));
const lodash_1 = __importDefault(require("lodash"));
let leetcodeprogram = new leetcode_1.default();
let projecteularprogram = new projecteuler_1.default();
console.clear();
console.time("Solution");
console.timeEnd("Solution");
console.log(lodash_1.default.chunk(["a", "b", "c", "d"], 2));
