/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let cadena1 = "Esto es una cadena"
let cadena2 = " que ha sido concatenada"

let concatenada = cadena1+cadena2

// 2. Muestra la longitud de una cadena de texto

console.log(concatenada.length)

// 3. Muestra el primer y último carácter de un string

console.log(cadena1[0])
console.log(cadena1[cadena1.length-1])

// 4. Convierte a mayúsculas y minúsculas un string

cadena1.toUpperCase()
cadena2.toLowerCase()

// 5. Crea una cadena de texto en varias líneas

let multilinea = `Esto es una
cadena
multilinea`

// 6. Interpola el valor de una variable en un string

let edad = 25
let interpolado = `Edad: ${edad}. `
console.log(interpolado)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(concatenada.replaceAll(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

concatenada.includes("Esto")

// 9. Comprueba si dos strings son iguales

let comparacion = "Comparacion"
console.log(comparacion=="Comparacion")

// 10. Comprueba si dos strings tienen la misma longitud

console.log("comparacion".length == comparacion.length)