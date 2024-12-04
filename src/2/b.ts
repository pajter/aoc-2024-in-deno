import { readInput } from "../util.ts";
import { getDistances, getSafe } from "./util.ts";

const input = readInput<number[][]>(`${import.meta.dirname}/input.txt`);

const map = new Map<number[], {
  safe: boolean;
}>();

for (const item of input) {
  const variations = [
    item,
    ...item.map((_, k, arr) => {
      const newArr = [...arr];
      delete newArr[k];
      return newArr.filter((v) => typeof v === "number");
    }),
  ];

  const safe = variations.some((variation) => {
    const distances = getDistances(variation);
    return getSafe(distances);
  });

  map.set(item, { safe });
}

const sum = map.values().reduce((acc, { safe }) => {
  return acc + Number(safe);
}, 0);

console.log(sum);
