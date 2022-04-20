import './style.css';
import {buscarHeroe, buscarHeroeAsync} from './js/promesas'

buscarHeroe( 'capi' )
    .then(heroe => console.log(heroe))
    .catch(console.warn)

buscarHeroeAsync( 'iron')
    .then(heroe => console.log(heroe))
    .catch(console.warn)

