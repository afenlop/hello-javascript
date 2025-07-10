/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let personaje = {
    nombre: "Link",
    videojuego: "The Legend of Zelda",
    isHeroe: true
}

// 2. Accede y muestra su valor

console.log(personaje)

// 3. Agrega una nueva propiedad

personaje.edad = NaN

// 4. Elimina una de las 3 primeras propiedades

delete personaje.nombre
console.log(personaje)

// 5. Agrega una función e invócala

let personajeFuncion = {
    nombre: "Link",
    videojuego: "The Legend of Zelda",
    isHeroe: true,
    saltar: function(){
        console.log(`${this.nombre} salta`)
    }
}
personajeFuncion.saltar()

// 6. Itera las propiedades del objeto

for(let propiedad in personaje){
    console.log(personaje[propiedad])
}
// 7. Crea un objeto anidado

let personajeAnidado = {
    nombre: "Link",
    videojuego: "The Legend of Zelda",
    isHeroe: true,
    saltar: function(){
        console.log(`${this.nombre} salta`)
    },
    equipamiento:{
        cabeza: "Casco antiguo",
        pecho: undefined,
        pies: "Botas de velocidad"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(`El equipamiento que lleva ${personajeAnidado.nombre} es: 
    Cabeza: ${personajeAnidado.equipamiento.cabeza},
    Pecho: ${personajeAnidado.equipamiento.pecho},
    Pies: ${personajeAnidado.equipamiento.pies}`)

// 9. Comprueba si los dos objetos creados son iguales

console.log(personaje==personajeAnidado)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(personajeAnidado.nombre==personajeAnidado.videojuego)