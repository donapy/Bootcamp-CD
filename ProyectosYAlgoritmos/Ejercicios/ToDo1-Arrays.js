// Ejercicios de Arrays - https://login.codingdojo.com/m/230/8061/55117
let myArray = [3, 4, 5, 6, 2, "hola", "texto"];

// push al frente
let valor1 = "primerElemento";
let newArray = [valor1, ...myArray];
console.log(`Resultado 1: ${newArray}`);

// pop al frente
let longitud2 = myArray.length;
let valor2 = myArray[longitud2 - 1];
let newArray2 = myArray;
newArray2.pop();
newArray2 = [valor2, ...myArray];
console.log(`Resultado 2: ${newArray2}`);

// insertar en
let indice3 = 2;
let valor3 = 10;
let newArray3 = myArray;
newArray3[indice3] = valor3;
console.log(`Resultado 3: ${newArray3}`);

// eliminar en
let indice4 = 0;
let valor4 = myArray[indice4];
let newArray4 = [];
let j4 = 0;
for (let i4 = 0; i4 < myArray.length; i4++) {
  if (indice4 !== i4) {
    newArray4[j4] = myArray[i4];
    j4++;
  }
}
console.log(`Resultado 4: ${valor4} y el array es: ${newArray4}`);

// pares de intercambio
let newArray5 = [];
let j5 = 0;
for (let i5 = 0; i5 < myArray.length; i5++) {
  if (myArray[i5 + 1]) {
    newArray5[j5] = myArray[i5 + 1];
    j5++;
    newArray5[j5] = myArray[i5];
    i5++;
    j5++;
  } else {
    newArray5[j5] = myArray[i5];
  }
}
console.log(`Resultado 5: ${newArray5}`);

// eliminar duplicados
let myArray6 = [
  "Jose",
  "Matias",
  "Matias",
  "Gerardo",
  "Matias",
  "Gerardo",
  "Jose",
  "Lucas",
];
let newArray6 = [];
let j6 = 0;

for (let i = 0; i < myArray6.length; i++) {
  if (i === 0) {
    newArray6[j6] = myArray6[i];
  } else {
    if (!newArray6.includes(myArray6[i])) {
      newArray6[j6] = myArray6[i];
      j6++;
    }
  }
}
console.log(`Resultado 6: ${newArray6}`);
