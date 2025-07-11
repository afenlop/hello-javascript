/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

try{
    func()
}catch(error){
    console.log("Se ha producido un error" + error)
}

// 2. Captura una excepción utilizando try-catch y finally

try{
    func()
}catch(error){
    console.log("Se ha producido un error" + error)
}
finally{
    console.log("Me ejecuto de todas formas")
}

// 3. Lanza una excepción genérica

//throw new Error("Excepcion Generica")

// 4. Crea una excepción personalizada

class LengthError extends Error{
    constructor(mensaje,parametro){
        super(mensaje)
        this.mensaje=mensaje
        this.parametro=parametro
    }
    print(){
        console.log(this.mensaje + " Parametro ingresado: " + this.parametro)
    }
}

// 5. Lanza una excepción personalizada

//throw new LengthError("El nombre no puede superar los 20 caracteres ni tampoco ser vacio","")

// 6. Lanza varias excepciones según una lógica definida

function saluda(nombre){
    if(typeof nombre != "string"){
        throw new TypeError("El nombre ingresado debe ser de tipo string")
    }
    else if(nombre.length>20 || nombre.length <=1){
        throw new LengthError("El nombre no puede superar los 20 caracteres ni tampoco ser vacio",nombre)
    }
    else{
        console.log(`Bienvenido, ${nombre}`)
    }
}

//saluda("")
//saluda(1)

// 7. Captura varias excepciones en un mismo try-catch

try{
    saluda("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
}catch(error){
    if(error instanceof TypeError){
        console.log(`Error de tipo: ${error.message}`)
    }else if(error instanceof LengthError){
        console.log(`Error de longitud: ${error.message}`)
        error.print()
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

try{
    let numeros = ["13.4","25","catorce",1,]
    for(let numero of numeros){
        console.log(1.0*numero)
    }
}catch(error){
    console.log(error.message)
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

class PropertyError extends Error{
    constructor(mensaje,propiedad){
        super(mensaje)
        this.mensaje=mensaje
        this.propiedad=propiedad
    }
    print(){
        console.log(this.mensaje + " Propiedad encontrada: " + this.propiedad)
    }
}

let objeto1={
    nombre: "Hola",
    error: true
}

function comprobarPropiedad(objeto,propiedad){
    if(objeto[propiedad]!=null){
        throw new PropertyError("Propiedad no valida",propiedad)
    }
}

try{
    comprobarPropiedad(objeto1,"error")
}catch(error){
    error.print()
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function suma(a,b,intento,maxIntentos){
    if(a<=0 || b<=0){
        throw new Error(`Solo son validos numeros enteros positivos, intento ${intento}/${maxIntentos}`)
    }
    else{
        console.log(a+b)
    }
}

function reintentarFuncion(func,a,b,maxIntentos=10){
    for(let i=1;i<=maxIntentos;i++){
        console.log(`Intento ${i}`)
        try{
            func(a,b,i,maxIntentos)
        }catch(error){
            console.log(error.message)
            if(i==maxIntentos){
                throw new Error('Error. Se han alcanzado el maximo numero de intentos')
            }
            
        }
    }
    
}

try{
    reintentarFuncion(suma,-2,-2,10)
}
catch(error){
    console.log(error.message)
}


