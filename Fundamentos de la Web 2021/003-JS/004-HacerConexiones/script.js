console.log("page loaded...");
function changeName(element) {
  document.getElementById(element).innerText = "Chun Li";
}

function removeElement(idLi, bool = false) {
  let element = document.getElementById(idLi);
  element.parentNode.removeChild(element);
  //se resta la cantidad de connection requests
  let counter = parseInt(
    document.getElementById("span-count-requests").innerText
  );
  counter--;
  document.getElementById("span-count-requests").innerText = counter;

  //se suma la cantidad de your connections en caso de aceptar
  if (bool) {
    let counterConn = parseInt(
      document.getElementById("span-count-connections").innerText
    );
    counterConn++;
    document.getElementById("span-count-connections").innerText = counterConn;
  }
}
