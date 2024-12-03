export const split = (
  input: readonly (readonly [number, number])[],
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

export const join = ([left, right]: [number[], number[]]) => {
  return left.map((_, k) => {
    return [left[k], right[k]] as const;
  });
};
