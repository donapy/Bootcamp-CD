//imprimir impares 1-20
for (let index = 1; index < 21; index++) {
  if (index % 3 === 0) {
    console.log(index);
  }
}

//imprimir impares de 100 a 0
for (let index = 100; index > 0; index--) {
  if (index % 3 === 0) {
    console.log(index);
  }
}

//imprimir la secuencia
for (let index = 4; index > -4; index -= 1.5) {
  console.log(index);
}

//Sigma
let suma = 0;
for (let index = 0; index < 101; index++) {
  suma += index;
}
console.log(suma);

//Factorial
let fact = 1;
for (let index = 1; index < 13; index++) {
  fact *= index;
}
console.log(fact);
