let n = Number(prompt('Sekundni kiriting '));
let minut = 0;
let sec = 0;

minut = Math.floor(n / 60);
sec = n % 60;

console.log(minut , 'minutu ', sec, ' sekund');