import { readInput } from "../util.ts";
import { split, zip } from "./util.ts";

const input = readInput<[number, number][]>(`${import.meta.dirname}/input.txt`);

const [left, right] = split(input);

const sortedInput = zip(left, right);

const distances = sortedInput.map(([left, right]) => {
  return Math.abs(right - left);
});

const sum = distances.reduce((acc, v) => {
  return acc + v;
}, 0);

console.log(sum);
