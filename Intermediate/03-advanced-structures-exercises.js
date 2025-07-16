/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

let palabras = ["Abecedario","Andalucia","Banco","Tarro","Restaurante"]

let palabrasMayus = palabras.map(element => element.toUpperCase())
console.log(`Map ${palabrasMayus}`)

let palabrasA = palabras.filter(element => element.charAt(0)=="A")
console.log(`Filter ${palabrasA}`)

let numLetras = palabras.reduce((result,current) => result += current.length,0)
console.log(`Reduce ${numLetras}`)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo 
// y filtra sólo los números pares

let numeros = [12,1,8,9,24,56,7]
let ej2 = numeros.map(element=>element**3).filter(element=>element%2==0)
console.log(`Ejercicio2 ${ej2}`)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

console.log("Flat")
let nestedNumeros = [12,1,[8,9,[24,56]],7]
let flatNumeros =nestedNumeros.flat(1)
console.log(flatNumeros)
let frases = ['Comienza un nuevo dia',['El nuevo dia ya comenzó','Increible',['El dia prosigue'],['Se acabó']]]
let frasesFlat = frases.flat(2)
console.log(frasesFlat)
console.log("FlatMap")
let reg = new RegExp(".dia")
let frasesFlatMap = frasesFlat.flatMap(element=>element.match(reg))
console.log(frasesFlatMap)

// 4. Ordena un array de números de mayor a menor

console.log("Ejercicio 4: "+numeros.sort((a,b)=>b-a))

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
let unoDiez = [1,2,3,4,5,6,7,8,9,10]
let unoDiezSet = new Set(unoDiez)
let paresSet = new Set(unoDiez.map(i=>i*2))
let interseccion = new Set([...unoDiezSet].filter(i=>paresSet.has(i)))
let union = new Set([...unoDiezSet,...paresSet])
let diferencia = new Set([...unoDiezSet].filter(i=>!paresSet.has(i)))
console.log(interseccion)
console.log(union)
console.log(diferencia)

// 6. Itera los resultados del ejercicio anterior

union.forEach(element => console.log(element))

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

let usuarios = new Map([
    [1,["Pepito",25,"pepito@gmail.com"]],
    [2,["Paquita",45,"paquita@gmail.com"]],
    [3,["Dolores",10,"dolores@gmail.com"]]
])
usuarios.forEach(user=>console.log(user))

// 8. Dado el mapa anterior, crea un array con los nombres
let nombres = []
usuarios.forEach(user=>nombres.push(user[0]))
console.log(nombres)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

let emails = []
usuarios.forEach(user=>{
    if(user[1]>18){
    emails.push(user[2])
    }
})
let emailsSet = new Set(emails)
console.log(emails)

// 10. Transforma el mapa en un objeto, a continuación, 
// transforma el objeto en un mapa con clave el email de cada usuario y 
// como valor todos los datos del usuario

let usuariosObj = Object.fromEntries(usuarios)
let entriesUsuarios = new Map()
Object.entries(usuariosObj).forEach(usuario => entriesUsuarios.set(usuario[1][2],[usuario[1][0],usuario[1][1]]))
console.log("Ejercicio 10")
console.log(entriesUsuarios)