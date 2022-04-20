
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// fetch( jokeUrl ).then( resp => {
//     resp.json().then( data => {
//         console.log(data);
//         console.log(data.id); //mostrar un valor en específico del json
//         console.log(data.value); //mostrar un valor en específico del json
//     });
// });

// Otra forma mas corta de utilizar las promesas
fetch( jokeUrl )
    .then( resp => resp.json() )
   // .then (console.log );  // muestra toda la respuesta
    .then( ({ id, value }) => { // desestructuración de arreglos
        console.log(id, value);
    })
