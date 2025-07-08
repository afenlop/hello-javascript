/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let imprime = true

if(imprime){
    console.log("Adrian")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "root"
let pass = "rotrot"
if(user == "root" && pass == "root1234"){
    console.log("Bienvenido root")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let num = -10

if(num>0){
    console.log("Positivo")
}
else if(num<0){
    console.log("Negativo")
}
else{
    console.log("Cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 6

if(edad>18){
    console.log("Puede votar")
}
else{
    console.log("Faltan " + (18 - edad) + " años para votar.")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

edad = 10
let estado = edad>=18? "Adulto":"Menor"
console.log(estado)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Julio"

if(mes == "Diciembre" || mes == "Enero" || mes == "Febrero"){
    console.log("Invierno")
}
else if(mes == "Marzo" || mes == "Abril" || mes == "Mayo"){
    console.log("Primavera")
}
else if(mes == "Junio" || mes == "Julio" || mes == "Agosto"){
    console.log("Verano")
}
else if(mes == "Septiembre" || mes == "Octubre" || mes == "Noviembre"){
    console.log("Otoño")
}
else{
    console.log("Mes no valido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

mes = "Diciembre"

if(mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Noviembre"){
    console.log("31 días.")
}
else if(mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Octubre" ||mes == "Diciembre"){
    console.log("30 días.")
}
else if(mes == "Febrero"){
    console.log("28 días.")
}
else{
    console.log("Mes no valido")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "IT"
switch(idioma){
    case("ES"):
        console.log("Hola")
        break
    case("EN"):
        console.log("Hi")
        break
    case("GER"):
        console.log("Guten Tag")
        break
    case("IT"):
        console.log("Buongiorno")
        break
    default:
        console.log("Idioma no soportado")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

mes="Agosto"
switch(mes){
    case("Enero"):
        console.log("Invierno")
        break
    case("Febrero"):
        console.log("Invierno")
        break
    case("Marzo"):
        console.log("Primavera")
        break
    case("Abril"):
        console.log("Primavera")
        break
    case("Mayo"):
        console.log("Primavera")
        break
    case("Junio"):
        console.log("Verano")
        break
    case("Julio"):
        console.log("Verano")
        break
    case("Agosto"):
        console.log("Verano")
        break 
    case("Septiembre"):
        console.log("Otoño")
        break 
    case("Octubre"):
        console.log("Otoño")
        break 
    case("Noviembre"):
        console.log("Otoño")
        break
    case("Diciembre"):
        console.log("Invierno")
        break
    default:
        console.log("Mes no válido")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch(mes){
    case("Enero"):
        console.log(31+" días.")
        break
    case("Febrero"):
        console.log(28+" días.")
        break
    case("Marzo"):
        console.log(31+" días.")
        break
    case("Abril"):
        console.log(30+" días.")
        break
    case("Mayo"):
        console.log(31+" días.")
        break
    case("Junio"):
        console.log(30+" días.")
        break
    case("Julio"):
        console.log(31+" días.")
        break
    case("Agosto"):
        console.log(31+" días.")
        break 
    case("Septiembre"):
        console.log(30+" días.")
        break 
    case("Octubre"):
        console.log(30+" días.")
        break 
    case("Noviembre"):
        console.log(31+" días.")
        break
    case("Diciembre"):
        console.log(30+" días.")
        break
    default:
        console.log("Mes no válido")
}