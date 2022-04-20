let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        length: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
};

console.log(personaje);
console.log('Nombre: ', personaje.nombre); // Obtiene el nombre. se llama al objeto y la propiedad nombre
console.log('Nombre: ', personaje['nombre']); // Otra forma de obtener el valor de una propiedad del objeto.
console.log('Edad: ', personaje.edad);
console.log('Coors: ', personaje.coords);
console.log('Lat: ', personaje.coords.lat);

console.log('N°. Trajes: ', personaje.trajes.length);
console.log('último. Traje: ', personaje.trajes.length-1);

const x = 'vivo';
console.log('Vivo', personaje[x]); // a partir del nombre de la propiedad del objeto que es vivo, en esta caso x tiene el valor 'vivo' y hace referencia a dicha propiedad

// Más detalles

delete personaje.edad; // Elimina una propiedad del objeto

 const entriesPares = Object.entries(personaje); // Retoruna un array con las propiedads y su valor en cada posicion del arreglo
 console.log(entriesPares);
 
 Object.freeze(personaje) // Evita que se realicen modificaciones a las propiedades, pero no a las prpiedades del objeto interno

 personaje.dinero = 100000000000;

 const propiedades = Object.getOwnPropertyNames(personaje); //Retorna las propiedas del objeto en un array
 const valores = Object.values(personaje); //Retorna los valores del objeto en un array
