function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
  var pizza = {};
  pizza.tipoCorteza = tipoCorteza;
  pizza.tipoSalsa = tipoSalsa;
  pizza.quesos = quesos;
  pizza.salsas = salsas;
  return pizza;
}

console.log(
  pizzaOven(
    "estilo chicago",
    "tradicional",
    ["mozzarella"],
    ["pepperoni", "salchicha"]
  )
);

console.log(
  pizzaOven(
    "lanzada a mano",
    "marinara",
    ["mozzarella", "feta"],
    ["champinones", "aceitunas", "cebollas"]
  )
);

console.log(
  pizzaOven(
    "masa fina",
    "roja",
    ["mozzarella", "catupiry"],
    ["pollo", "bacon", "pepperoni"]
  )
);

console.log(pizzaOven("masa gruesa", "roja", ["4 quesos"], ["pollo"]));
