var input = require("fs").readFileSync("stdin", "utf8");



// selecionar os primos

// let primos = [];

// var valores = input.split(',');

// for(let i=0; i < valores.length; i++) {
//   if(valores[i] !== 1) {
//     let count = 0;
//     for(let j=valores[i]; j > 0; j--) {
//       let total = valores[i] / j;
//       if (typeof total == 'number' && total % 1 == 0){
//         count++;
//       }
//     }
//     if(count == 2) {
//       primos.push(valores[i]);
//     }
//   }
// }

// console.log(primos)

// __________________________________________________


// N-ésimo primo

let countNésimo = 0;
let NésimoPrimo = 0;

for(let i = 1; i < 10**10; i++) {
  if(i != 1) {
    let count = 0;
    for(let j=i; j > 0; j--) {
      let total = i / j;
      if (typeof total == 'number' && total % 1 == 0){
        count++;
      }
    }
    if(count == 2) {
      countNésimo++;
    }
    
    if(countNésimo == input) {
      NésimoPrimo = i;
      i = 10**10;
    }
  }  
}

console.log(NésimoPrimo);