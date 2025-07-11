/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

function mult(a,b){
    if(a==0 || b==0){
        console.error(`No es posible multiplicar por 0`)
    }
    else{
        return a*b
    }
}

mult(0,2)

// 2. Crea una función que utilice warn correctamente

function login(username,pass=""){
    if(pass.length<4){
        console.warn("La contraseña es debil, por seguridad cambiela cuanto antes")
    }
    console.log(`Bienvenido ${username}`)
}

login("adrian","123")

// 3. Crea una función que utilice info correctamente

function loginFecha(username,pass=""){
    if(pass.length<4){
        console.warn("La contraseña es debil, por seguridad cambiela cuanto antes")
    }
    let fecha = new Date(Date.now())
    console.info(`Fecha de inicio de sesión: ${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`)
    console.log(`Bienvenido ${username}`)
}

loginFecha("adrian","12354")

// 4. Utiliza table

let tabla = [
    ["Lunes","Pierna"],
    ["Martes","Pecho,Biceps"],
    ["Miercoles","Hombros"],
    ["Jueves","Pierna"],
    ["Viernes","Espalda,Triceps"]
]
console.table(tabla)

// 5. Utiliza group

console.group("Lista de usuarios")
console.log("Pepito")
console.log("Grillo")
console.log("Abeja")
console.log("Maya")
console.groupEnd()

// 6. Utiliza time

console.time("Bucle de 100 iteraciones")

for(let i=0;i<100;i++){

}

console.timeEnd("Bucle de 100 iteraciones")

// 7. Valida con assert si un número es positivo
let num = -2

console.assert(num>0,"El numero debe ser positivo")

// 8. Utiliza count

console.count("Hola")
console.count("Hola")
console.count("Hola")
console.count("Hola")

// 9. Utiliza trace

console.trace()

// 10. Utiliza clear

// console.clear()