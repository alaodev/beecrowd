// https://www.beecrowd.com.br/judge/en/problems/view/1001

let input = require('fs').readFileSync('stdin', 'utf8');

let inputArray = input.split('\n');

let A = parseInt(inputArray.shift());
let B = parseInt(inputArray.shift());

let X = A + B;

console.log(`X = ${X}`);