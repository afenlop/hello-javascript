/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let numeros = [1,2,3,4,5,6]
let [num1, num2] = numeros
console.log(num1+" "+num2)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [num3=0,num4=0] = numeros

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let coche = {
    matricula: "93513JYA",
    motor: "AAAA",
    puertas: 5
}

let {matricula,motor} = coche
console.log(`Matricula: ${matricula}, Motor: ${motor}`)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {matricula:nuevaMatricula,motor:nuevoMotor} = coche

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let cocheConDueño = {
    matricula: "93513JYA",
    motor: "AAAA",
    puertas: 5,
    dueño:{
        nombre: "Adrian",
        fechaNacimiento: "26/10/1900"
    }
}

let {dueño:{nombre:nombreDueño},dueño:{fechaNacimiento}} = cocheConDueño
console.log(`Nombre Dueño: ${nombreDueño}, Fecha de Nacimiento: ${fechaNacimiento}`)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let numeros2 = [10,20,30,40,50]
let combi = [...numeros,...numeros2]
console.log(combi)

// 7. Usa propagación para crear una copia de un array

let combi2=[...combi]

// 8. Usa propagación para combinar dos objetos en uno nuevo

let maletero={
    capacidad:100,
    cargado:false
}

let cocheConMaletero={...cocheConDueño,maletero}
console.log(cocheConMaletero)

// 9. Usa propagación para crear una copia de un objeto

let coche2 = {...cocheConMaletero}

// 10. Combina desestructuración y propagación

let {capacidad:capacidadDeCarga,cargado:llevaEquipaje} = {...coche,...maletero}
console.log(capacidadDeCarga + " " + llevaEquipaje)