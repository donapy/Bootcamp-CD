var array = [0, 0, 0];

//inicializo los valores a los likes
for (let i = 0; i < array.length; i++) {
  let x = i + 1;
  let elementSearch = "#count-likes" + x;
  let element = document.body.querySelector(elementSearch);
  element.innerText = array[i];
}

//sumar la cantidad de likes y actualizar en el dom
function sumLikes(i) {
  let elementSearch = "#count-likes" + i;
  console.log(`Elemento a buscar: ${elementSearch}`);
  let element = document.body.querySelector(elementSearch);
  element.innerText = array[i - 1] + 1;
  array[i - 1] += 1;
  console.log(`Array: ${array}`);
}
