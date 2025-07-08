/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let suma = 3+4
let resta = 10-3
let mult = 2*3
let div = 90/9
let mod = 10%2
let exponente = 2**8
let incremento = 1
incremento++
let decremento = 10
decremento--

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let sumaAsignacion 
sumaAsignacion += suma
let restaAsignacion
restaAsignacion -= resta
let multAsignacion
multAsignacion *= multAsignacion
let divAsignacion
divAsignacion /= divAsignacion
let modAsignacion
modAsignacion %= modAsignacion
let exponenteAsignacion
exponenteAsignacion **= exponenteAsignacion

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log("3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación")
console.log(10>5)
console.log(5>=5)
console.log(1<7)
console.log(8<=10)
console.log(10==10)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("4. Imprime 5 comparaciones falsas con diferentes operadores de comparación")
console.log("8"===8)
console.log(7>9)
console.log(0==true)
console.log(8!=8)
console.log(1<=null)

// 5. Utiliza el operador lógico and

suma>sumaAsignacion && resta != null

// 6. Utiliza el operador lógico or

suma>sumaAsignacion || resta != null

// 7. Combina ambos operadores lógicos

suma>sumaAsignacion && resta != null || resta==exponente

// 8. Añade alguna negación

!false

// 9. Utiliza el operador ternario

9>10? "Es mayor":"Es menor"

// 10. Combina operadores aritméticos, de comparáción y lógicas

suma ** 2 < restaAsignacion && 0==""