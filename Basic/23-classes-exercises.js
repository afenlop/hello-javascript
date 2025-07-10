/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class Vehiculo{
    constructor(matricula,motor){
        this.matricula=matricula
        this.motor=motor
    }
}

// 2. Añade un método a la clase que utilice las propiedades

class Vehiculo2{
    constructor(matricula,motor){
        this.matricula=matricula
        this.motor=motor
    }

    print() {
        console.log(`Matricula: ${this.matricula}, Motor: ${this.motor}`)
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función

let vehicle = new Vehiculo2("123456LJK","V100")

vehicle.print()

// 4. Añade un método estático a la primera clase

class Vehiculo3{
    constructor(matricula,motor){
        this.matricula=matricula
        this.motor=motor
    }

    print() {
        console.log(`Matricula: ${this.matricula}, Motor: ${this.motor}`)
    }

    static pita(){
        console.log("El vehiculo pita")
    }
}

// 5. Haz uso del método estático

Vehiculo3.pita()

// 6. Crea una clase que haga uso de herencia

class Coche extends Vehiculo3{
    constructor(matricula,motor,puertas){
        super(matricula,motor)
        this.puertas=puertas
    }
}

let seat = new Coche("456789OLP","V6",5)
seat.print()

// 7. Crea una clase que haga uso de getters y setters

class Coche2 extends Vehiculo3{
    constructor(matricula,motor,puertas){
        super(matricula,motor)
        this.puertas=puertas
    }

    get puertas(){
        return this.puertas
    }
    set puertas(puertas){
        this.puertas=puertas
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas

class Coche3 extends Vehiculo3{

    #puertas
    constructor(matricula,motor,puertas){
        super(matricula,motor)
        this.#puertas=puertas
    }

    get puertas(){
        return this.#puertas
    }
    set puertas(puertas){
        this.#puertas=puertas
    }
}

// 9. Utiliza los get y set y muestra sus valores

let renault = new Coche3("1351235","ASFA",10)
console.log(`Puertas: ${renault.puertas}`)
renault.puertas=6
console.log(`Puertas: ${renault.puertas}`)

// 10. Sobrescribe un método de una clase que utilice herencia 

class Coche4 extends Vehiculo3{

    #puertas
    constructor(matricula,motor,puertas){
        super(matricula,motor)
        this.#puertas=puertas
    }

    get puertas(){
        return this.#puertas
    }
    set puertas(puertas){
        this.#puertas=puertas
    }

    print(){
        console.log(`Matricula: ${this.matricula}, Motor: ${this.motor}, Puertas: ${this.puertas}`)
    }
}

let audi = new Coche4("1351235","ASFA",10)
audi.print()
