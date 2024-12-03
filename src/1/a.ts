import { input } from "./input.ts";
import { join, split } from "./util.ts";

const [left, right] = split(input);

const sortedInput = join([left, right]);

const distances = sortedInput.map(([left, right]) => {
  return Math.abs(right - left);
});

const sum = distances.reduce((acc, v) => {
  return acc + v;
}, 0);

console.log(sum);
