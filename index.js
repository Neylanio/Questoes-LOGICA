var input = require("fs").readFileSync("stdin", "utf8");

let pi = 3.14159;

let total = (4/3) * pi * input**3;

console.log(`VOLUME = ${total.toFixed(3)}`)
