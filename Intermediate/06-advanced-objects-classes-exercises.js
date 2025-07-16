/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agrega una función al prototipo de un objeto

let perro = {
    nombre: "Cookie",
    raza: "Yorkshire"
}

Object.getPrototypeOf(perro).ladra = function(){
    console.log("GUAU")
}

perro.ladra()

// 2. Crea un objeto que herede de otro

let perro2 = Object.create(perro)
perro2.nombre = "Coco"
perro2.raza = "Caniche"
console.log(perro2)

// 3. Define un método de instancia en un objeto

let perro3 = Object.create(perro)
perro3.duerme = function(){
    console.log(`${this.nombre} esta durmiendo`)
}

perro3.duerme()

// 4. Haz uso de get y set en un objeto

let videojuego = {
    nombre: "Overcooked",
    plataformas: ["PC","Switch","PS","Xbox"],
    getPlataformas: function(){
        return this.plataformas
    },
    setPlataformas: function(array){
       this.plataformas = array 
    }  
}

console.log(videojuego.getPlataformas())
videojuego.setPlataformas(["NES"])
console.log(videojuego.getPlataformas())

// 5. Utiliza la operación assign en un objeto

let perroVideojuego = Object.assign(perro,videojuego)
console.log(perroVideojuego)

// 6. Crea una clase abstracta

class Persona{
    constructor(nombre,dni){
        if(new.target===Persona){
            throw new Error("Persona es una clase abstracta, no se puede instanciar")
        }
        this.nombre = nombre
        this.dni = dni
    }
}

// 7. Utiliza polimorfismo en dos clases diferentes

class Empleado extends Persona{
    constructor(nombre,dni,cargo){
        super(nombre,dni)
        this.cargo = cargo
    }
}

class Cliente extends Persona{
    constructor(nombre,dni,direccion){
        super(nombre,dni)
        this.direccion = direccion
    }
}

// 8. Implementa un Mixin

const SaludaMixin = {
    saluda(){
        console.log(`${this.nombre} dice hola`)
    }
}

Object.assign(Cliente.prototype,SaludaMixin)

let cliente1 = new Cliente("Paco","1234","Calle Piruleta")
cliente1.saluda()

// 9. Crea un Singleton

class CEO extends Empleado{
    constructor(nombre,dni,cargo="CEO"){
        if(CEO.instance){
            return CEO.instance
        }
        super(nombre,dni,cargo)
        CEO.instance=this
    }
}

let ceo1 = new CEO("Jefazo","123124")
console.log(ceo1)
let ceo2 = new CEO("Jefote","45678")
console.log(ceo2)

// 10. Desarrolla un Proxy
let usersLog = new Map()
const proxy = {
    get(target, property) {
        return target[property]
    },
    set(target, property, value) {
        if (property === "dni") {
            throw new Error("No es posible modificar el dni")
        }
        usersLog.set(target["dni"],target[property])
        target[property] = value
    }
}

let programador = new Proxy(new Empleado("Adrian","12345678A","Programador Jefe"),proxy)
console.log(programador.nombre)

try{
    programador.dni = "AAAA"
}catch(error){
    console.error(error.message)
}

programador.nombre="ADRIAAAAAN"
console.log(programador.nombre)
console.log(usersLog)