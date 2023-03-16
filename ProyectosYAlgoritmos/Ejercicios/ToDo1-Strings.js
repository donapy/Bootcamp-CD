//Ejercicios de Strings - https://login.codingdojo.com/m/230/8063/55145

//Quitar espacios en blanco
//Crea una función que, dada una cadena, devuelva todo el contenido de esa cadena, pero sin espacios en blanco. Si se da la cadena "Pl ayTha tF u nkyM usi c", devuelve "PlayThatFunkyMusic".
let texto = "Pl ayTha tF u nkyM usi c";
console.log(texto.split(" ").join(""));

//Obtener dígitos
//Crea una función de JavaScript que, dada una cadena, devuelva el número entero formado por los dígitos de la cadena. Dado "0s1a3y5w7h9a2t4? 6! 8? 0", la función debería devolver el número 1357924680.
function fobtDig(cadena) {
  var nums = "0123456789".split("");
  console.log(nums);
  var digitos = "";
  for (var i = 0; i < cadena.length; i++) {
    if (nums.includes(cadena[i])) {
      digitos += cadena[i];
    }
  }
  return digitos;
}
console.log(fobtDig("0s1a3y5w7h9a2t4?6!8?0").toString());

//Acrónimos
//Crea una función que, dada una cadena, devuelva el acrónimo de la cadena (solo las primeras letras, en mayúscula). Dado "no hay almuerzo gratis, debes pagar por tu comida", devuelve "NHAGDPPTC".
function facronimo(cadena) {
  var acronymo = "";
  var arr = cadena.split(" ");
  for (var i = 0; i < arr.length; i++) {
    acronymo += arr[i].substr(0, 1).toUpperCase();
  }
  return acronymo;
}
console.log(facronimo("no hay almuerzo gratis, debes pagar por tu comida"));

//Contar no espacios
//Acepta una cadena y devuelve el número de caracteres sin espacio que encuentre en una cadena. Por ejemplo, dado, "Amor, me estás volviendo loca", devuelve 29 (no 35).
//ESTA MAL EL RESULTADO PROPUESTO POR EL EJERCICIO
let cadena1 = "Amor, me estás volviendo loca";
console.log(cadena1.split(" ").join("").length);

//Quitar cadenas más cortas
//Dada una matriz de cadenas y un valor (longitud), elimina las cadenas más cortas que la longitud de la matriz.
let matrizInicial = ["jose", "testeo1", "ho", "la", "testeer"];
let longitud = 4;
let matriz = [];
for (var i = 0; i < matrizInicial.length; i++) {
  if (matrizInicial[i].length >= longitud) {
    matriz.push(matrizInicial[i]);
  }
}
console.log(matriz);
