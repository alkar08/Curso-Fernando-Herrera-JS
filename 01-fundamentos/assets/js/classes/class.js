

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

const spiderman = new Persona("Peter Parker", "Spiderman", "Soy tu amigable vecino");
const iroman = new Persona("Tony Stark", "Iroman", "Soy Iroman");
spiderman.quienSoy();
spiderman.miFrase();

spiderman.setComidaFavorita = "El pie de cereza de la tía May";

console.log(spiderman.getComidaFavorita);

// Para llamar una propíedad o método estático, se llama directamente la clase, no se debe instanciar
 
console.log("conteo estático", Persona._conteo); // llamada propieda estático

 console.log(Persona.conteo); // llamado get estático

 Persona.mensaje(); // llamado método estático
