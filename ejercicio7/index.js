/*
Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
*/
const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
const divContainer = document.querySelector('[data-function="printHere"]')

const placesUl = document.createElement("ul")
for(var i = 0; i < places.length; i++){
    const placesLi = document.createElement("li")
    placesLi.textContent = places[i]
    placesUl.appendChild(placesLi)
}
document.body.appendChild(placesUl)