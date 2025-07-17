let number = 123;
let onlik = 0;
let birlik = 0;

birlik = number % 10;
onlik = Math.floor((number % 100) / 10);

console.log("Birlik raqami: " , birlik);
console.log("O'nlik raqami: " , onlik);