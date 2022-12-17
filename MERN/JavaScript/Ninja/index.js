class Ninja {
  constructor(nombre, salud, velocidad = 3, fuerza = 3) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = velocidad;
    this.fuerza = fuerza;
  }
  sayName() {
    console.log(`Nombre del ninja: ${this.nombre}`);
  }

  showStats() {
    console.log(
      `Nombre del ninja: ${this.nombre}, fuerza: ${this.fuerza}, velocidad: ${this.velocidad} y salud: ${this.salud}`
    );
  }

  drinkSake() {
    this.salud += 10;
  }
}

let ninja1 = new Ninja("joge", 10, 5, 6);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
