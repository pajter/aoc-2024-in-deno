export const split = (
  input: [number, number][],
  sort = true,
) => {
  const left: number[] = [];
  const right: number[] = [];

  for (const [a, b] of input) {
    left.push(a);
    right.push(b);
  }

  if (sort) {
    left.sort();
    right.sort();
  }

  return [left, right] as const;
};

export const zip = (
  left: number[],
  right: number[],
) => {
  return left.map((_, k) => {
    return [left[k], right[k]] as [number, number];
  });
};
