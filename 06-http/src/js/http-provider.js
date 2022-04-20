

const jokeUrl     = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';


// Cloudinary
 const cloudPreset = 'vuavusd9';
 const cloudUrl    = 'https://api.cloudinary.com/v1_1/alkar08/upload';

const obtenerChiste = async() => {

    try {

        const resp = await fetch( jokeUrl );

        if( !resp.ok ) throw 'no se puedo realizar la petición';
    
        const {icon_url, id, value} = await resp.json(); // desestructuración de arreglos
        
        return {icon_url, id, value};
        
    } catch (error) {
        throw error;
    }  
}


const obtenerUsuarios = async() => {

    const resp = await fetch( urlUsuarios );
    const {data:usuarios} = await resp.json(); //desestructuración para traer solo la data de la respuesta y se le coloca un alias que en este caso es usuarios, esta es la sintaxis {data:usuarioas}

    return usuarios;
}

// Archivo a subir es de tido File
const subirImagen = async( archivoSubir ) => {

    const formData = new FormData(); // crea el resultado de un formulario html en javaScript
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {
    
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if( resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch (error) {
        throw error;
    }
}













export {
    obtenerChiste, 
    obtenerUsuarios, 
    subirImagen
}