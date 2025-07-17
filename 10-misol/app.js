let A = 5;
let B = 10;
let C = 15;

console.log('Oldingi qiymatlar: ','A = ', A,', B = ', B, ', C = ', C);

let exchange = A;
A = B;
B = C;
C = exchange;

console.log('Yangi qiymatlar: ','A = ', A,', B = ', B, ', C = ', C);
