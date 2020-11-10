// Ambiente para testes jscript em questoes URI

var input = require("fs").readFileSync("stdin", "utf8");

var values = input.split(' ');

const A = Number(values[0]);
const B = Number(values[1]);
const C = values[2];

let triangulo = (A * C) / 2;
let circulo = 3.14159 * (C**2);
let trapezio = ((A + B) * C)/2;
let quadrado = B**2;
let retangulo = A * B;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
console.log(`CIRCULO: ${circulo.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
console.log(`RETANGULO: ${retangulo.toFixed(3)}`)
