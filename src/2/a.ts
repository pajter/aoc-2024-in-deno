import { readInput } from "../util.ts";

const input = readInput<number[][]>(`${import.meta.dirname}/input.txt`);

const map = new Map<number[], {
  distances: number[];
  safe: boolean;
}>();

for (const item of input) {
  const distances = item.map((num, k) => {
    const next = item[k + 1];

    if (typeof next === "undefined") {
      return;
    }

    return num - next;
  }).filter((v) => typeof v === "number");

  const safe = distances.some((v) => v === 0 || Math.abs(v) > 3) === false &&
    (distances.every((v) => v > 0) || distances.every((v) => v < 0));

  map.set(item, { distances, safe });
}

const sum = map.values().reduce((acc, { safe }) => {
  return acc + (safe ? 1 : 0);
}, 0);

console.log(sum);
