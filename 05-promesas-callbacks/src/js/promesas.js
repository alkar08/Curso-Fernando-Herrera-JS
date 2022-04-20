const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Capacidad de lanzar telaraña'
    },
}

export const buscarHeroe = ( id ) => {

    const heroe = heroes[id];

    return new Promise( ( resolve, reject) => {

        if( heroe ){
            resolve( heroe );
        }else{
            reject(`No existe un heroe con id ${id}`);
        }
    });
}

export const buscarHeroeAsync =  async( id ) => { // Toma la función y su retorno es una nueva promesa que resuelve el valor del return

    const heroe = heroes[id];

    if( heroe ){
        return heroe;
    }else{
        // throw Error(`No existe un heroe con id ${id}`); // Se usa cuando no conocemos el error, este brinda la información del error, la linea etc
        throw `No existe un heroe con id ${id}`; // Como en este caso conocemos el error se puede manejar solo con el throw
    }
}

const promesaLenta = new Promise( ( resolve, reject) => {

    setTimeout( () => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise( ( resolve, reject) => {

    setTimeout( () => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise( ( resolve, reject) => {

    setTimeout( () => resolve('Promesa Rápida'), 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}