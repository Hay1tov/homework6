let a = prompt('Paralelepepidning a tomonini kiriting:');
let b = prompt('Paralelepepidning b tomonini kiriting:');
let c = prompt('Paralelepepidning c tomonini kiriting:');

let V = a * b * c;
let S = 2 * (a * b + b * c + a * c);

console.log('Paralelepepidning hajmi: ', +V);
console.log("Paralelepepidning to'la sirti : ", +S);