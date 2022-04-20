

const fher ={
    nombre: "Fernando",
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const pedro ={
    nombre: "Pedro",
    edad: 15,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

function Persona(nombre, edad) {
    console.log("Se ejecutó ésta línea");
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona("María", 18);
const meli = new Persona("Melissa", 25);

maria.imprimir();
meli.imprimir();