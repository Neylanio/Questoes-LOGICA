// Ambiente para testes jscript em questoes URI

var input = require("fs").readFileSync("stdin", "utf8");

var values = input.split('\n');

var values1 = values[0].split(' ');
var values2 = values[1].split(' ');

var x1 = Number(values1[0]);
var x2 = Number(values2[0]);

var y1 = Number(values1[1]);
var y2 = Number(values2[1]);


const total = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

console.log(total.toFixed(4))