// Siempre hambriento
function alwaysHungry(arr) {
  let cont = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === "comida") {
      console.log("delicioso");
      cont++;
    }
  }
  cont > 0 ? null : console.log("Tengo hambre");
}

alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
alwaysHungry([4, 1, 5, 7, 2]);

// ####################################################

// valores mayores a cutoff
function highPass(arr, cutoff) {
  var filteredArr = [];
  for (let index = 0; index < arr.length; index++) {
    arr[index] > cutoff ? filteredArr.push(arr[index]) : null;
  }
  return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

// ####################################################

// Mejor que el promedio
function betterThanAverage(arr) {
  var sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  let average = sum / arr.length;
  var count = 0;

  for (let index = 0; index < arr.length; index++) {
    arr[index] > average ? count++ : null;
  }
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

// ####################################################

// Arreglo invertido
function reverse(arr) {
  let newArr = [];
  for (let index = arr.length - 1; index > -1; index--) {
    newArr.push(arr[index]);
  }
  return newArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

// ####################################################

// Fibonacci
function fibonacciArray(n) {
  // [0, 1] son los valores inciales del arreglos para calcular el resto
  var fibArr = [0, 1];
  for (let i = 1; i < n - 1; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i]);
  }
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
