import { readInput } from "../util.ts";
import { split } from "./util.ts";

const input = readInput<[number, number][]>(`${import.meta.dirname}/input.txt`);

const [left, right] = split(input, false);

const times = left.reduce<[number, number][]>((acc, left) => {
  acc.push([left, right.filter((v) => v === left).length]);

  return acc;
}, []);

const sum = times.reduce((acc, [left, times]) => {
  return acc + (left * times);
}, 0);

console.log(sum);
