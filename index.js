// Ambiente para testes jscript em questoes URI

var input = require("fs").readFileSync("stdin", "utf8");

var value = Number(input);

var qtd100 = 0;
var qtd50 = 0;
var qtd20 = 0;
var qtd10 = 0;
var qtd5 = 0;
var qtd2 = 0;
var qtd1 = 0;

function cedulas(value) {
  if(value >= 100) {
    qtd100++;
    return cedulas(value-100);
  }else if(value>= 50) {
    qtd50++;
    return cedulas(value-50);
    
  }else if(value >= 20) {
    qtd20++;
    return cedulas(value-20);
    
  }else if(value >= 10) {
    qtd10++;
    return cedulas(value-10);
    
  }else if(value >= 5) {
    qtd5++;
    return cedulas(value-5);
    
  }else if(value >= 2) {
    qtd2++;
    return cedulas(value-2);
    
  }else if(value == 1) {
    qtd1++;
    return cedulas(value-1);
  }else {
    return;
  }
}

cedulas(value);

console.log(input)
console.log(`${qtd100} nota(s) de R$ 100,00`)
console.log(`${qtd50} nota(s) de R$ 50,00`)
console.log(`${qtd20} nota(s) de R$ 20,00`)
console.log(`${qtd10} nota(s) de R$ 10,00`)
console.log(`${qtd5} nota(s) de R$ 5,00`)
console.log(`${qtd2} nota(s) de R$ 2,00`)
console.log(`${qtd1} nota(s) de R$ 1,00`)
