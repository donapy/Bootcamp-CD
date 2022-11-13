const alturaNino = 125;

function muestraSiElNiñoPuedeSubirALaMontañaRusa(altura) {
  let msg = "";
  if (alturaNino > 52) {
    msg = "¡Súbete, chico!";
  } else {
    msg = "Lo siento, chico. Tal vez el próximo año";
  }
  return msg;
}
var result = muestraSiElNiñoPuedeSubirALaMontañaRusa(alturaNino);
console.log(result);
