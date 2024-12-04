const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);

const muls = input.matchAll(/mul\(([\d]{1,3}),\s*([\d]{1,3})\)/gmi);

let sum = 0;
for (const mul of muls) {
  const [, a, b] = mul;
  sum += Number(a) * Number(b);
}

console.log(sum);
