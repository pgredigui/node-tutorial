const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync("./content/new_file.txt", "Hello world");

writeFileSync("./content/new_file.txt", "Hello world", { flag: "a" });
