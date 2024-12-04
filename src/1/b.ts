import { readInput, split } from "./util.ts";

const [left, right] = split(readInput(), false);

const times = left.reduce<[number, number][]>((acc, left) => {
  acc.push([left, right.filter((v) => v === left).length]);

  return acc;
}, []);

const sum = times.reduce((acc, [left, times]) => {
  return acc + (left * times);
}, 0);

console.log(sum);
