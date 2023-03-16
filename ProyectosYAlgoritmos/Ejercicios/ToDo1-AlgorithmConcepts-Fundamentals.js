// Ejercicios de Algorithm Concepts and Tips -https://login.codingdojo.com/m/230/8058/55087

//Configuración e intercambio
//Pon myNumber en 42. Deja myName con tu nombre.Ahora intercambia myNumber por myName y viceversa.
var myNumber = 42;
var myName = "Donato";
var aux = myName;
var myName = myNumber;
var myNumber = aux;
console.log(`myNumber: ${myNumber} - myName: ${myName}`);

//Imprimir -52 a 1066
//Imprime números enteros de -52 a 1066 usando un bucle FOR.
for (let i = -52; i <= 1066; i++) {
  console.log(i);
}

//No te preocupe, sé feliz
//Crea beCheerful(). Dentro de este, la cadena console.log "¡buenos días!" Llámalo 98 veces.
function beCheerful() {
  console.log("¡buenos días!");
}
for (let i = 1; i <= 98; i++) {
  beCheerful();
}

//Múltiplos de tres, pero no todos
//Usando FOR, imprime múltiplos de 3 de -300 a 0. Omite -3 y -6.
for (let i = -300; i <= 0; i += 3) {
  if (i === -3 || i === -6) {
    continue;
  } else {
    console.log(i);
  }
}

//Imprimir enteros con While
//Imprime números enteros de 2000 a 5280, utilizando un WHILE.
let i = 2000;
while (i <= 5280) {
  console.log(i);
  i++;
}

//Año bisiesto
//Escribe una función que determine si un año determinado es bisiesto. Si un año es divisible por cuatro, es un año bisiesto, a menos que sea divisible por 100. Sin embargo, si es divisible por 400, entonces lo es.
let anho = 400;
if (anho % 400 === 0) {
  console.log("Es bisiesto");
} else if (anho % 100 === 0) {
  console.log("No bisiesto");
} else if (anho % 4 === 0) {
  console.log("Es bisiesto");
} else {
  console.log("No bisiesto");
}

//Imprimir y contar
//Imprime todos los múltiplos enteros de 5, de 512 a 4096. Después, también registra cuántos había.
let contador = 0;
for (let i = 512; i <= 4096; i++) {
  if (i % 5 === 0) {
    console.log(i);
    contador++;
  }
}
console.log(`Total: ${contador}`);

//Múltiplos de seis
//Imprime múltiplos de 6 hasta 60.000, utilizando un WHILE.
let j = 6;
while (j <= 60000) {
  console.log(j);
  j += 6;
}

//Contando, a la manera del Dojo
//Imprime los números enteros del 1 al 100. Si es divisible por 5, imprime "Codificando" en su lugar. Si es por 10, también imprime "Dojo".
for (let h = 1; h <= 100; h++) {
  if (h % 10 === 0) {
    console.log("Dojo");
  } else if (h % 5 === 0) {
    console.log("Codificando");
  } else {
    console.log(h);
  }
}

//¿Qué sabes?
//Tu función recibirá un parámetro de entrada incoming. Por favor, console.log este valor.
let texto = "incoming";
function fincoming(txt) {
  console.log(txt);
}
fincoming(texto);

//Guau, es enorme...
//Agrega números enteros impares de -300,000 a 300,000, y console.log la suma final. ¿Existe un atajo?
let suma1 = 0;
for (let k = -299999; k <= 300000; k += 2) {
  suma1 += k;
}
console.log(suma1);

//Cuenta regresiva cada cuatro
//Registra números positivos a partir de 2016, contando hacia atrás cada cuatro números (excluye 0), sin un bucle FOR.
let numero = 2016;
while (numero > 0) {
  console.log(numero);
  numero = numero - 4;
}

//Cuenta regresiva flexible
//Basado en el anterior ejercicio: “Cuenta regresiva cada cuatro”, dado lowNum, highNum, mult, print múltiplos de mult desde highNum hasta lowNum, usando un FOR. Para (2,9,3), imprime 9 6 3 (en líneas sucesivas).
let lowNum = 2;
let highNum = 9;
let mult = 3;
for (let l = highNum; l >= lowNum; l--) {
  if (l % mult === 0) {
    console.log(l);
  }
}

//La cuenta regresiva final
//Esto se basa en "Cuenta regresiva flexible". Los nombres de los parámetros no son tan útiles, pero el problema es esencialmente idéntico; ¡no te dejes engañar! Dados 4 parámetros (param1, param2, param3, param4), imprime los múltiplos de param1, comenzando en param2 y extendiéndose hasta param3. Una excepción: si un múltiplo es igual a param4, omítelo (no lo imprimas). Haz esto usando un WHILE. Dado (3,5,17,9), imprime 6,12,15 (que son todos los múltiplos de 3 entre 5 y 17, y excluyendo el valor 9).
let param1 = 3;
let param2 = 5;
let param3 = 17;
let param4 = 9;
if (param2 <= param3) {
  for (let b = param2; b <= param3; b++) {
    if (b == param4) {
      continue;
    }
    if (b % param1 == 0) {
      console.log(b);
    }
  }
} else {
  for (let b = param2; b >= param3; b--) {
    if (b == param4) {
      continue;
    }
    if (b % param1 == 0) {
      console.log(b);
    }
  }
}
