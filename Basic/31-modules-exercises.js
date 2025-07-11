/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

export function saluda(){
    console.log("Hola mundo")
}

// 2. Exporta una constante

export const nombre = "Adrian"

// 3. Exporta una clase

export class User {
    constructor(username,pass){
        this.username=username
        this.pass=pass
    }
}

// 4. Importa una función

//Supongamos que nos encontramos en otro fichero
// import{saluda,nombre,User} from ".31-modules-exercises"

// 5. Importa una constante

console.log(nombre)

// 6. Importa una clase

let usuario = new User(nombre,`${nombre}1234`)

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

//No es posible exportar constantes
// export default const apellido="Fenet"
export default function signUp(username,pass){
    return null
}
// export default class SuperUsuario{ Solo se puede realizar un default

// }

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

//No es posible importar constantes default
// import funcionDefault from ".31-modules-exercises"

// 9. Exporta una función, una constante y una clase desde una carpeta

//Lo mismo de antes

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
// import{loquesea} from "carpeta/31-modules-exercises"
