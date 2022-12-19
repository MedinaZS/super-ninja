//Clase padre
class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log(this.nombre);
    }

    showStats(){
        console.log(`Nombre: ${this.nombre} \nFuerza: ${this.fuerza} \nVelocidad: ${this.velocidad} \nSalud: ${this.salud}\n`)
    }

    drinkSake(){
        this.salud+=10;
    }
}

//Clase hija
class Sensei extends Ninja{
    constructor(nombre){
        super(nombre, 200);
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"


