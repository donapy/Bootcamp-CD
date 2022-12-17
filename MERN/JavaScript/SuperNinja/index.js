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

class Sensei extends Ninja {
  constructor(nombre, salud, velocidad, fuerza, sabiduria = 10) {
    super(nombre, (salud = 200), (velocidad = 10), (fuerza = 10));
    this.sabiduria = sabiduria;
  }
  speakWisdom() {
    super.drinkSake();
    console.log("No pierdas la calma");
  }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
