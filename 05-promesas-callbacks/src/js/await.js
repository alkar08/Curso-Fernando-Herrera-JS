import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi','iron','spider'];
const heroesPromesas = heroesIds.map( id => buscarHeroe(id));

export const obtenerHeroesArr = async() => {

    return await Promise.all(heroesIds.map(buscarHeroe));

    
    // const heroesArr = [];

    // for( const id of heroesIds ) {
    //     heroesArr.push( buscarHeroe( id) );
    // }

    // return await Promise.all( heroesArr ); // La mejor forma de usar el await es por fuera del ciclo for

    // for( const id of heroesIds) {
    //     const heroe = await buscarHeroeAsync( id );
    //     heroesArr.push( heroe );
    // }
    
    // return heroesArr;
};

export const obtenerHeroeAwait = async( id ) => {

    try {
        const heroe = await buscarHeroeAsync( id );
        return heroe;
    } catch (error) {
       // throw error;           //regresamos el error
       return{                  // acá estamos regresando este objeto por defecto
           nombre: 'sin nombre',
           poder: 'sin poder'
       }
    }
}

export const heroesCiclo = async () => {

    console.time('HeroesCiclo');

    for await( const heroe of heroesPromesas ) {
        console.log(heroe);
    }

    // const heroes = await Promise.all( heroesPromesas);
    // heroes.forEach( heroe => console.log(heroe));

    console.timeEnd('HeroesCiclo');
}

export const heroeIfAwait = async(id) => {
    if ( (await buscarHeroeAsync(id)).nombre === 'Ironman' ) {
        console.log('Es el mejor de todos');
    }else {
        console.log('Naaa');
    }
}