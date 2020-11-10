// Lista invertida

var input = require("fs").readFileSync("stdin", "utf8");

var values = input.split(',');

var newValues = [];

for (let i = values.length-1; i >= 0; i--) {
  newValues.push(values[i])    
}

console.log(newValues)