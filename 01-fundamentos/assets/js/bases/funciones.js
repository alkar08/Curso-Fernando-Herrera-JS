function saludar (nombre){
    console.log(arguments); //Es un objeto impplicito en una función, hace referencia a los parámetros que le envían
    console.log('Hola ' + nombre);
};

const saludar2 = function(){
    console.log('')
};

const saludarFlecha = () => {
    console.log('Hola Flecha');
};

const saludarFlecha2 = nombre => {  // Cuando viene con un solo argumento se puede escribier sin paréntesis
    console.log('Hola ' + nombre);
};

function saludarRetorno (nombre){
   return 10;
};
//saludar('Alejo');

//saludar('Alejo', 40, true, 'Costa Rica');

//saludarFlecha();
//saludarFlecha2('Meli');

const retornoSaludar = saludarRetorno('Alejo');
//console.log(retornoSaludar);



function sumar(a, b){
    return a + b;
};

const sumar2 = (a,b) => {
    return a + b;
};

function getAleatorio(){
    return Math.random();
};

const aleatorio = () => {
    return Math.random();
};

console.log(aleatorio());