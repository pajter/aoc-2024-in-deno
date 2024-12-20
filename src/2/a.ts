import { readInput } from "../util.ts";
import { getDistances, getSafe } from "./util.ts";

const input = readInput<number[][]>(`${import.meta.dirname}/input.txt`);

const map = new Map<number[], {
  distances: number[];
  safe: boolean;
}>();

for (const item of input) {
  const distances = getDistances(item);
  const safe = getSafe(distances);

  map.set(item, { distances, safe });
}

const sum = map.values().reduce((acc, { safe }) => {
  return acc + Number(safe);
}, 0);

console.log(sum);
