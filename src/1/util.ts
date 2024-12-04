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

export const join = (
  [left, right]: [number[], number[]],
) => {
  return left.map((_, k) => {
    return [left[k]!, right[k]!] as const;
  });
};

export const readInput = (test = false) => {
  const pth = `${import.meta.dirname}/input${test ? ".test" : ""}.txt`;

  return Deno.readTextFileSync(pth).split("\n")
    .map((line) => {
      line = line.trim();
      if (!line) {
        return;
      }

      const [left, right] = line.split(/\s+/).map((v): number =>
        Number(v.trim())
      );

      return [left, right] as const;
    }).filter((v) =>
      typeof v !== "undefined"
    ) as readonly (readonly [number, number])[];
};
