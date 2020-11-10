var input = require("fs").readFileSync("stdin", "utf8");

var pieces = input.split('\n');

var piece1 = pieces[0].split(' ');
var piece2 = pieces[1].split(' ');

let total = (piece1[1] * piece1[2]) + (piece2[1] * piece2[2])

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
