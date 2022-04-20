const crearPersona = (nombre, apellido) => ({nombre, apellido}); //como los parámetros tienen el mismo nombre a las propiedades del objeto
//no es necesario hacerlo de la forma tradicional, debe ir entre parentesís y llaves para que la función identifique que son los valores y no las 
//llaves de la función

const persona = crearPersona('Alejo', 'Correa');
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
};

const imprimeArgumentos2 = (edad, ...args) =>{ // Al ser una función de flecha esta no contiene el objeto argumentos como una función tradicional por 
    //console.log({edad, args});                // este motivo deben in los tres puntos(...) y el nombre del parámetro, cabe destacar que después de este
    return args;                                         // no puede ir ningún otro parámetro
};

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Alejo', 'Hola'); // Al retonrnar un arreglo se puede darle un nombre a cada una de las posiciones
console.log({casado, vivo, nombre, saludo}); //Se colocan las llaves para que cree un objeto con pares y valores para que sea más fácil de ver
                                             // la edad no va porque está excluida en la función

 const {apellido: nuevoApellido} = crearPersona('Alejo', 'Correa'); // Se obtiene solo el apellido, se declara con nombre de la variable después de los 2 puntos para asignarle el nombre que yo quiera
 console.log({nuevoApellido});

 const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

/*
    Se pueden pasasr como parámetros de la función las propiedades del personajae entre {}
    Se le puede dar un valor a la propiedad por si no la tiene
    Se puede imprimir con llaves para mostrar como objeto
*/
const imprimePropiedades = (nombre, codeName, vivo, edad = 15, trajes) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);