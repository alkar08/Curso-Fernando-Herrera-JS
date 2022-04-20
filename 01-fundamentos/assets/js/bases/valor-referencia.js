

let juan = {nombre: 'Juan'};
let ana = { ...juan}; //Se utiliza el operador spread para romper la referencia que hay entre objetos
ana.nombre = 'Ana';

console.log({juan, ana});

const cambiaNombre = ( {...persona}) => { //Se utiliza el operador spread (debe de ir entre  porque se utiliza el parámetro como objeto) para romper la referencia que hay entre objetos
    persona.nombre = 'Tony';
    return persona;
};

let peter = {nombre: 'Peter'};
let tony  = cambiaNombre(peter);

console.log({peter, tony});

const frutas = ['Manzana', 'Pera', 'Piña' ];

const otrasFrutas = [...frutas]; //Se utiliza el operador spread (debe de ir entre corchetes) para uqe se tome como un nuevo objeto

otrasFrutas.push('Mango');

