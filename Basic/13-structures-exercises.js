/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animales = [ "Perro","Gato","Leon","Gorrion","Piton"]
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final

animales.push("Golondrina")
animales.unshift("Carbonero")
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2,1)
console.log(animales)

// 4. Crea un set que almacene cinco libros

let libros = new Set(["El camino de los reyes","Harry Potter: El misterio del principe","El mundo de sofía",
    "Cien años de soledad","El principito"])
console.log(libros)


// 5. Añade dos más. Uno de ellos repetido

libros.add("1984")
libros.add("Cien años de soledad")
console.log(libros)

// 6. Elimina uno concreto a tu elección

libros.delete("El principito")
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map([
    [1,"Enero"],[2,"Febrero"],[3,"Marzo"],[4,"Abril"],[5,"Mayo"],[6,"Junio"],
    [7,"Julio"],[8,"Agosto"],[9,"Septiembre"],[10,"Octubre"],[11,"Noviembre"],[12,"Diciembre"]
])
console.log(meses)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if(meses.has(5)){
    console.log(meses.get(5))
}
// 9. Añade al mapa una clave con un array que almacene los meses de verano

meses.set("verano",["Junio","Julio","Agosto"])
console.log(meses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let nuevoArray = ["Esto","será","un","set"]
let nuevoSet = new Set(nuevoArray)
let nuevoMapa = new Map([["Set",nuevoSet],["Mapa",nuevoArray]])
console.log(nuevoMapa)