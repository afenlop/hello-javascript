/*
Clase 79 - Regex
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=25888
*/

// 1. Crea una RegEx que valide correos electrónicos

const regCorreo = /\w+@{1}[a-z]+\.[a-z]+/
function compruebaCorreo(correo){
    if(regCorreo.test(correo)){
        console.log(correo,"es un correo válido")
    }else{
        console.log(correo,"NO es un correo válido")
    }
}

compruebaCorreo("23adrian_papap234@gmail.com")

// 2. Crea una RegEx obtenga Hashtags de un Texto

const regHastag = /\#/g
function reemplaza(cadena){
    return cadena.replace(regHastag,"HASHTAG")
}

console.log(reemplaza("#1,#2"))

// 3. Crea una RegEx que valide contraseñas seguras (mínimo 8 caracteres, al menos una letra y un número)

const regPass = /(?=.+[A-Za-z])(?=.+\d).{8,}/
function esSegura(pass){
    if(regPass.test(pass)){
        console.log(pass,"es una contraseña segura")
    }else{
        console.log(pass,"NO es una contraseña segura")
    }
}

esSegura("12345a____")

// NOTA: Aplícalas utilizando diferentes operaciones