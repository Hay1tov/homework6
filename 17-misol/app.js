let x = 987;
let yuzlik = 0;
let onlik = 0;
let birlik = 0;
let result = 0;

yuzlik = Math.floor(x / 100);
onlik = Math.floor((x % 100) / 10);
birlik = x % 10;

result = yuzlik + onlik + birlik;

console.log("raqamlar yig'indisi: " , result);