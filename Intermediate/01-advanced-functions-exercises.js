/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función

function devuelveFuncion(){
    return function(){
        console.log("Hola")
    }
}

let saluda = devuelveFuncion()
saluda()

// 2. Implementa una función currificada que multiplique 3 números

function mult1(a){
    return function mult2(b){
        return function mult3(c){
            return a*b*c
        }
    }
}

const multA = mult1(8)
const multB = multA(10)
console.log(multB(1))
console.log(multA(5)(3))

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function exp(base,exponente){
    return exponente==0?1:base*exp(base,exponente-1)
}

console.log(exp(10,2))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos 
// para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(valor=1){
    let contador=valor
    return {
        increment:()=>{
            contador++
        },
        decrement:()=>{
            contador--
        },
        getValue:()=>{
            return contador
        }
    }
}

let contador1 = createCounter(1)
contador1.increment()
contador1.increment()
console.log(contador1.getValue())

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números 
// (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier=1,...numbers){
    let sum = 0
    numbers.forEach((value) => sum+=value)
    return sum*multiplier
}

console.log(sumManyTimes(10,1,2,3))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function procesarNumeros(funcion,...numbers){
    return funcion(...numbers)
}

console.log(procesarNumeros(sumManyTimes,2,5,10))

// 7. Desarrolla una función parcial

function login(username){
    return function(perfil){
        console.log(`Bienvenido ${username}, ha accedido con el perfil de ${perfil}`)
    }
}

const inicio = login("Adrian")
inicio("Programador")
inicio("Usuario")

// 8. Implementa un ejemplo que haga uso de Spread

function imprime3Opciones(opcion1,opcion2,opcion3){
    return console.log(`Opcion 1:${opcion1},
Opcion 2:${opcion2},
Opcion 3:${opcion3},`)
}

let nombres = ["Paco","Maria","Juan","Ana"]
imprime3Opciones(...nombres)

// 9. Implementa un retorno implícito

const logout = (nombre) => console.log(`${nombre} ha cerrado sesion`)
logout("Adrian")

// 10. Haz uso del this léxico

let coche = {
    velocidad: 100,
    acelerar:function(){
        this.velocidad++
    }
}

coche.acelerar()
console.log(`El vehiculo va a ${coche.velocidad} km/h`)