import './style.css';

import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeIfAwait } from './js/await';

//obtenerHeroesArr().then(console.table);

// obtenerHeroeAwait('capi2')
//     .then( heroe => {
//         console.log(heroe);
//     }).catch( err => console.warn( err ));

heroesCiclo();

heroeIfAwait('iron');