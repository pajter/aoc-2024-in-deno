import { existsSync } from "@std/fs/exists";
import { resolve } from "@std/path/resolve";

// Resolve file to import based on arg
const pth = resolve(`./src/${Deno.args.at(0)}.ts`);
if (pth.includes("..") || !existsSync(pth)) {
  console.error(`Invalid file to import: ${pth}`);
  Deno.exit(1);
}

await import(pth);
