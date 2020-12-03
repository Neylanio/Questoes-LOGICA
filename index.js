var input = require("fs").readFileSync("stdin", "utf8");

function checkPalindromo(str) {
  str = str.replace(/\s/g, '');
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkPalindromo(input));