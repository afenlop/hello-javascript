/*
Clase 71 - DOM
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=23010
*/

// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página

document.addEventListener("DOMContentLoaded",()=>{
    const titulo = document.getElementById("titulo")
    titulo.textContent = "¡Hola Mundo!"
    
})

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL

const img = document.getElementById("myImage")
img.setAttribute("src","https://cdn.pixabay.com/photo/2025/06/10/11/21/view-9651981_1280.jpg")

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página

document.addEventListener("DOMContentLoaded",()=>{
    const box = document.getElementById("box")
    box.classList.add("resaltado")
})

// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul

const parrafo = document.querySelector("#paragraph")
parrafo.style.color = "blue"

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">

const boton = document.querySelector("button")
const lista = document.querySelector("#list")

boton.addEventListener("click",()=>{
    const elemento = document.createElement("li")
    elemento.textContent = "Nuevo elemento"
    lista.appendChild(elemento)
})

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM

const botonDelete = document.querySelector("#delete")
const p = document.getElementById("deleteParagraph")

botonDelete.addEventListener("click",()=>{
    p.remove()
})

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"

const divContent = document.querySelector("#content")
divContent.innerHTML = "<h2>Nuevo Contenido</h2>"

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic

const greetBtn = document.getElementById("greetBtn")
greetBtn.addEventListener("click",()=>{
    alert("¡Hola!")
})

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

const inputText = document.getElementById("textInput")
const divResult = document.getElementById("result")

inputText.addEventListener("keypress",(tecla)=>{
    if(tecla.key === "Enter"){
        divResult.textContent = inputText.value
        inputText.value = ""
    }
})

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente

const btn = document.getElementById("backgroundBtn")
const cuerpo = document.querySelector("body")
let colores = ["light-blue","red","yellow","white","gray","green"]
colores.push(...colores.reverse())

btn.addEventListener("click",()=>{
    let i=Math.round(Math.random()*10)
    cuerpo.style.backgroundColor= colores.at(i)
})