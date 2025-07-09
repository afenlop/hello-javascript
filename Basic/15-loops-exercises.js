/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i=1;i<=20;i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
let i = 1
while(i<=100){
    suma += i
    i++
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for(let i=1;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["Adrian","Maria","Antonio","Carla","Lucas","Dolores"]
for(let nombre of nombres){
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let cadena = "Esto es una cadena de texto de ejemplo"
let vocales = new Set(["a","e","i","o","u"])
let posicion = 0
let numVocales = 0
while(posicion < cadena.length){
    if(vocales.has(cadena[posicion])){
        numVocales++
    }
    posicion++
}
console.log(`Numero de vocales: ${numVocales}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [1,4,7,81,2]
let producto = 1

for(let numero of numeros){
    producto *= numero
}
console.log(`Resultado del producto: ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for(let i=0;i<=10;i++){
    console.log(5*i)
}

// 8. Usa un bucle para invertir una cadena de texto

let cadenaInvertida = ""
for(let i=cadena.length-1;i>=0;i--){
    cadenaInvertida += cadena[i]
}
console.log(cadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibonacci = 0
i = 1
while(i<=10){
    fibonacci+=i
    console.log(fibonacci)
    i++
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numerosMayores = []
for(let i = 0;i<numeros.length;i++){
    if(numeros[i]>10){
        numerosMayores.push(numeros[i])
    }
}
console.log(numerosMayores)