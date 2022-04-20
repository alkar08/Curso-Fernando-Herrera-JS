let a = 5;

if (a >= 10) {
    console.log('A es mayor o igual a 10');
}else{
    console.log('A es memor a 10');  
}

//console.log('Fin de programa');

const hoy = new Date();  //el new es para crear una instancia de un objeto

let dia = hoy.getDay();

if (dia === 0) { // Cuando se usa == es para comparar si son iguales sin importar el tipo de dato, si es === compara que el dato y el tipo de dato sean iguales
    console.log('Domingo');
} else if(dia === 1) {
    console.log('Lunes');
}

const diaLetras = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  
dias = 4;

const diasLetras2 = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
}

console.log(diaLetras[dias]);