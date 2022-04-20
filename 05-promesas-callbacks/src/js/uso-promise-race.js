import './style.css';
import {promesaLenta, promesaMedia, promesaRapida} from './js/promesas'

promesaLenta.then( mensaje => console.log(mensaje));
promesaMedia.then( console.log); // Esta es la forma reducida del llamado anterior, se puede hacer porque se manda un solo argumento que resuelve la promesa
promesaRapida.then( console.log);

Promise.race([promesaLenta, promesaMedia, promesaRapida]) // Regresa el valor de la promesa más rápida.
        .then(console.log);