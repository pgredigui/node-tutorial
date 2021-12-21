const path = require("path");
const { fileURLToPath } = require("url");

console.log(path.sep);

const filePath = path.join("/content/", "subforder", "test.txt");

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname);
console.log(absolute);
