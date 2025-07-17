/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response)=>{return response.json()})
//     .then((data)=>{console.log("Ej1",data)})

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

// try{
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response)=>{
//         if(response.ok){return response.json()}
//         else{
//             throw Error("Error en la peticion GET")
//         }
//     })
//     .then((data)=>{console.log("Ej2",data)})
// }catch(error){
//     console.log(error.message)
// }

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

async function ej3() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    console.log("Ej3",data)
    
}
// ej3()

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

async function ej4() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers: {
                "Content-Type": "application/json"
            },
        body:JSON.stringify({
            title: 'Tremendo titulo',
            body: 'Tremendo body'
        })
        })
    const data = await response.json()
    console.log("Ej4",data)
    
}
// ej4()

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

async function ej5() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/4",{
        method:"PUT",
        headers: {
                "Content-Type": "application/json"
            },
        body:JSON.stringify({
            userId: 3,
            title: 'Tremendo titulo',
            body: 'Tremendo body'
        })
        })
    const data = await response.json()
    console.log("Ej5",data)
    
}
// ej5()

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

async function ej6() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/9",{
        method:"PATCH",
        headers: {
                "Content-Type": "application/json"
            },
        body:JSON.stringify({
            title: 'Actualizacion titulo',
        })
        })
    const data = await response.json()
    console.log("Ej6",data)
    
}
// ej6()

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function ej7() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method:"DELETE"})
    const data = await response.json()
    console.log("Ej7",data)
    
}
// ej7()

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

async function ej8(city) {
    try{
        const apiKey = "d2f61ebb37a0073dd4df1589a81d0b91"
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        if(!response.ok){
              throw Error("Error en la llamada a la API" + response.status)
        }
        const data = await response.json()
        console.log("Ej8",data.main)
    }catch(error){
        console.log(error.message)
    }   
}
// ej8("Sevilla")

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, 
// a continuación los detalles de la especie 
// y, finalmente, la cadena evolutiva a partir de la especie

async function ej9(pokemon){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await response.json()
    const responseSpecies = await fetch(data.species.url)
    const dataSpecies = await responseSpecies.json()
    const responseChain = await fetch(dataSpecies.evolution_chain.url)
    const dataChain = await responseChain.json()
    console.log(dataChain)

}
// ej9("charizard")

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
