const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`)
  .trim()
  .replaceAll(/\s*/gmi, "");

const inputStripped = input.replaceAll(
  /don't\(\)(.*?(?=do\(\)))do\(\)|don't\(\).*$/gmi,
  "",
);

const muls = inputStripped.matchAll(/mul\(([\d]{1,3}),\s*([\d]{1,3})\)/gmi);

let sum = 0;
for (const mul of muls) {
  const [, a, b] = mul;
  sum += Number(a) * Number(b);
}

console.log(sum);
