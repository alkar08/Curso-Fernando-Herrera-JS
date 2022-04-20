import { buscarHeroe as buscarHeroeCallback } from './js/callbacks'; // se usa es as para colocarle un alias a la función en este archivo
import { buscarHeroe } from './js/promesas';
import './style.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';

// buscarHeroe ( heroeId, ( err, heroe ) => {

//     if( err ){
//         console.error( err );
//     }else {
//         console.log( heroe );
//     }

// }); 

// buscarHeroe( heroeId1 ).then( heroe1 =>{

//     // console.log(`Enviando a ${heroe1.nombre} a la misión`);

//     buscarHeroe ( heroeId2 ).then ( heroe2 =>{
//         console.log(`Enviando a ${ heroe1.nombre} y ${heroe2.nombre} a la misión`);
//     })
// });

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then( ([heroe1, heroe2]) => {
    console.log(`Enviando a ${ heroe1.nombre} y ${heroe2.nombre} a la misión`);
}).catch( err => {
    alert(err);
}).finally( () => {
    console.log('Se terminó el promise.all');
});



