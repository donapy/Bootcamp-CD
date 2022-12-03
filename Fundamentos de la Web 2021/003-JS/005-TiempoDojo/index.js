function alerta() {
  alert("Loading weather report...");
}

function removeCookie() {
  let element = document.getElementById("cookies");
  //   console.log(element);
  element.remove();
}

let tempMaxCelsius = [24, 27, 21, 26];
let tempMinCelsius = [18, 19, 16, 21];

let tempMaxFar = [75, 80, 69, 78];
let tempMinFar = [65, 66, 61, 70];
function changeTemps(scale) {
  if (scale === "C") {
    for (let i = 1; i < 5; i++) {
      let tempMax = document.getElementById("tempmax" + i);
      console.log(tempMax);
      let tempMin = document.getElementById("tempmin" + i);
      console.log(tempMin);
      tempMax.innerText = tempMaxCelsius[i - 1] + "°";
      tempMin.innerText = tempMinCelsius[i - 1] + "°";
    }
  } else {
    for (let i = 1; i < 5; i++) {
      let tempMax = document.getElementById("tempmax" + i);
      console.log(tempMax);
      let tempMin = document.getElementById("tempmin" + i);
      console.log(tempMin);
      tempMax.innerText = tempMaxFar[i - 1] + "°";
      tempMin.innerText = tempMinFar[i - 1] + "°";
    }
  }
}
