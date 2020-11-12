// Ambiente para testes jscript em questoes URI

var input = require("fs").readFileSync("stdin", "utf8");

var values = input.split('\n');

var autonomia = 12;
var tempoGasto = Number(values[0]);
var velocidadeMedia = Number(values[1])

let total = (tempoGasto * velocidadeMedia) / autonomia;

console.log(total.toFixed(3))