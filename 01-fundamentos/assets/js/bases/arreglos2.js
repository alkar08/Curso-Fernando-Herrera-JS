let juegos = ['Zelda', 'Mario ', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length); // Obtiene el largo (cantidad de datos que hay en el arreglo)

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1]; // obtener la ultima posición

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

let nuevaLongitud = juegos.push('F-Zero'); // Obtiene la longitud después de insertar un nuevo elemento
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Fire Emblem'); // Obtiene la longitud después de insertar un nuevo elemento en la primera posición
console.log ({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop(); // Elimina el último elemento del array 
console.log({juegoBorrado, juegos});

let pos =1;

console.log(juegos);
let juegoBorrado = juegos.splice(pos, 2); //Se elimina desde la posición que se indica y la cantidad de elementos a eliminar
console.log({juegoBorrado, juegos});

let metroIndex = juegos.indexOf('Metroid'); // Retorna el indice del elemento, debe ser igual como está el elemento en el array
console.log(metroIndex);
