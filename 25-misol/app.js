let n = Number(prompt('Sekundni kiriting '));
let soat = 0;
let sec = 0;

soat = Math.floor(n / 3600);
sec = n % 3600;

console.log(soat , 'soat ', sec, ' sekund');