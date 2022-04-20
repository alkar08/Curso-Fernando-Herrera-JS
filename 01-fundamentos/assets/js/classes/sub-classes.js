class Persona {

    static _conteo = 0; //propiedad est+atica

    // get estátivo
    static get conteo(){
        return Persona._conteo + 'instancias';
    }

    // métodfo estático
    static mensaje(){
        console.log(this.nombre); // retorna undefined ya que la porpiedad nombre requiere una instancia
        console.log('Hola a todos, soy un método estático');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida  = '';

    constructor( nombre = "sin nombre", codigo = "sin codigo", frase = "sin frase"){
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;
    }

    set setComidaFavorita(comida){
        this.comida = comida;
    }

    get getComidaFavorita() {
        return `La comida de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

class Heroe extends Persona{

    clan = "sin clan";

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase); // hace referencia al constructor padre (osea persona)
        this.clan = "Los Avengers"; // Si vamos a utlizar el this. se debe emplear despues del super
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`); // llamado método de la misma clase
        super.quienSoy(); // llamado método clase padre
    }
}

//const spiderman = new Persona("Peter Parker", "Spiderman", "Soy tu amigable vecino");
const spiderman = new Heroe("Peter Parker", "Spiderman", "Soy tu amigable vecino");
