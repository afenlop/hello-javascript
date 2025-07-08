/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//Esto es un comentario en una línea

// 2. Escribe un comentario en varias líneas

/* Este es
un comentario
en varias lineas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let cadena = "Hola JavaScript"
let entero = 4
let decimal = 1.2
let booleano = true
let indefinido
let nulo = null
let simbolo = Symbol("miSimbolo")
let granEntero = 2346234602362093866236236n

// 4. Imprime por consola el valor de todas las variables

console.log("4. Imprime por consola el valor de todas las variables")
console.log(cadena)
console.log(entero)
console.log(decimal)
console.log(booleano)
console.log(indefinido)
console.log(nulo)
console.log(simbolo)
console.log(granEntero)

// 5. Imprime por consola el tipo de todas las variables

console.log("5. Imprime por consola el tipo de todas las variables")
console.log("cadena: "+typeof cadena)
console.log("entero: "+typeof entero)
console.log("decimal: "+typeof decimal)
console.log("booleano: "+typeof booleano)
console.log("indefinido: "+typeof indefinido)
console.log("nulo: "+typeof nulo)
console.log("simbolo: "+typeof simbolo)
console.log("granEntero: "+typeof granEntero)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

cadena = "Esto es una nueva cadena"
entero = 12
decimal = 16.6
booleano = false
simbolo = Symbol("Otro simbolo")
granEntero = 98723692362360236236n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

cadena = 5
entero = undefined
decimal = true
booleano = 5.7
indefinido = null
nulo = Symbol("simboloNulo")
simbolo = 123561236209386236125n
granEntero = "Esto era un gran entero"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const cadenaConstante = "Hola JavaScript"
const enteroConstante = 4
const decimalConstante = 1.2
const booleanoConstante = true
const indefinidoConstante = undefined //Las constantes deben ser definidas
const nuloConstante = null
const simboloConstante = Symbol("miSimbolo")
const granEnteroConstante = 2346234602362093866236236n

// 9. A continuación, modifica los valores de las constantes

//No se pueden modificar las constantes, su propio nombre lo indica.

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse