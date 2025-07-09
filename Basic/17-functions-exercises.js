/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

let suma = (a=0,b=0) => a+b

console.log(suma(6,8))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let temp = 0
function mayor(numeros = []){
    for(let num of numeros){
        if(num>temp){
            temp = num
        }
    }
    return temp
}


console.log(mayor([9,10,7,2]))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function cuentaVocales(cadena){
    let vocales = new Set(["a","e","i","o","u"])
    let posicion = 0
    let numVocales = 0
    while(posicion < cadena.length){
        if(vocales.has(cadena[posicion])){
            numVocales++
        }
        posicion++
    }
    return numVocales
}

console.log(`Numero de vocales: ${cuentaVocales("Cuenta cuantas vocales hay en esta cadena")}`)

let cuentaVocales2 = function (cadena){
    let vocales = new Set(["a","e","i","o","u"])
    let posicion = 0
    let numVocales = 0
    while(posicion < cadena.length){
        if(vocales.has(cadena[posicion])){
            numVocales++
        }
        posicion++
    }
    return numVocales
}

console.log(`Numero de vocales: ${cuentaVocales2("Cuenta cuantas vocales hay en esta cadena")}`)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function aMayus(cadenas=[""]){
    let cadenasMayus = []
    cadenas.forEach((value)=>cadenasMayus.push(value.toUpperCase()))
    return cadenasMayus
}

console.log(aMayus(["cadena en minusculas","hola que tal","prueba3"]))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(num){
    for(let i = num-1;i>1;i--){
        if(num%i==0){
            return false
        }
    }
    return true
}

console.log("¿Es primo? " + esPrimo(13))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let comunes = function (arrayA = [],arrayB = []){
    let salida = []
    for(let valorA of arrayA){
        for(let valorB of arrayB){
            if(valorA==valorB){
                salida.push(valorA)
            }
        }
    }
    return salida
}

let array1 = [1,3,5,7,9,11]
let array2 = [1,2,3,4,5,6,7,8,9,10]
console.log(comunes(array1,array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaPares(numeros = []){
    let total = 0
    numeros.forEach((value) => {if(value%2==0){total+=value}})
    return total
}

console.log(sumaPares(array2))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function elevaArray(numeros = []){
    let numsCuadrado = []
    numeros.forEach((value)=>numsCuadrado.push(value**2))
    return numsCuadrado
}

console.log(elevaArray(array1))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertirPalabras(cadena = ""){
    let cadenaInversa = ""
    let palabras = cadena.split(" ")
    for(let i=palabras.length-1;i>=0;i--){
        cadenaInversa+=palabras[i]
        if(i!=0){
            cadenaInversa += " "
        }
    }
    return cadenaInversa
}

console.log("Ejercicio 9: "+invertirPalabras("Es necesario ordenar"))

// 10. Crea una función que calcule el factorial de un número dado

function factorial(num = 1){
    let salida=1
    if(num>0){
        for(let i=num;i>0;i--){
            salida *= i
        }
    }
    else if(num<0){
        for(let i=num;i<0;i++){
            salida *= i
        }
    }
    else{
        salida=0
    }
    return salida
}

console.log(factorial(-5))
