export const readInput = <T extends number[][]>(
  pth: string,
) => {
  return Deno.readTextFileSync(pth).split("\n")
    .map((line) => {
      line = line.trim();
      if (!line) {
        return;
      }

      const numbers = line.split(/\s+/).map((v): number => Number(v.trim()));

      return numbers;
    }).filter((v) => typeof v !== "undefined") as T;
};
