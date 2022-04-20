import { obtenerChiste, obtenerUsuarios } from "./http-provider";

const body = document.body;
let btnOtro, olList;
let chisteRetornado = '';


const crearChistedHtml = () => {

    const html = `
        <h1 class="mt-5">Chistes</h1>
        <hr>

        <button class="btn btn-primary"> Otro chiste </button>

        <ol class="mt-2 list-group">

        </ol> `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);
}

const eventos = () => {

    olList = document.querySelector('ol')
    btnOtro = document.querySelector('button');

    

    btnOtro.addEventListener('click', async() => {
    
        btnOtro.disabled = true;
        
        //una forma de hacerlo asignando el valor a una variable

        //const chiste = await obtenerChiste();
        //dibujarChiste(chiste);


        //Forma más corta
        dibujarChiste( await obtenerChiste() );

        // Forma de hacerlo con then
        // obtenerChiste().then(chiste =>{
        //     dibujarChiste(chiste);
        // });

        btnOtro.disabled = false;

    });
}


//Chiste traera {id, value}
const dibujarChiste = ( chiste ) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${ chiste.id }</b>: ${ chiste.value }`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);

}


export const init = () => {
    crearChistedHtml();
    eventos();
}
