const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Iroman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Capacidad de lanzar telaraña'
    },
}

export const buscarHeroe = (id, callback) => {

    const heroe = heroes[id];

    if( heroe ){
        callback( null, heroe );
    }else{
        callback(`No existe un heroe con id ${id}`);
    }
}   