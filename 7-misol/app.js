let r1 = prompt("1-aylana radiusini kiriting: ");
let r2 = prompt("2-aylana radiusini kiriting: ");

let S = 0;

let S1 = Math.PI * (r1**2);
let S2 = Math.PI * (r2**2);

console.log('S1 = ', + S1);
console.log('S2 = ', + S2);

if (S1 > S2) {
  S = Math.PI * (r1**2 - r2**2);

  console.log('S = ', + S);
}