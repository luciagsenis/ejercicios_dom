//1.1 Inserta dinamicamente en un html un div vacio con javascript.
var myDiv = document.createElement("div")
document.body.appendChild(myDiv)

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
var myDiv2 = document.createElement("div")
var myP = document.createElement("p")
myDiv2.appendChild(myP)
document.body.appendChild(myDiv2)

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
var myDiv3 = document.createElement("div")
for(var i = 0; i < 6; i++){
    myDiv3.appendChild(document.createElement("p"))
}
document.body.appendChild(myDiv3)

//1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
var dinamicP = document.createElement("p")
dinamicP.innerText = "Soy dinámico!"
document.body.appendChild(dinamicP)

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
var h2Text = document.querySelector(".fn-insert-here")
h2Text.innerText = "Wubba Lubba dub dub"

//1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
var appsUl = document.createElement("ul")
for (let i = 0; i < apps.length; i++) {
    const app = apps[i];
    const li = document.createElement("li");
    li.textContent = app
    appsUl.appendChild(li)
}
document.body.appendChild(appsUl)

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removeElements = document.querySelectorAll(".fn-remove-me")
removeElements.forEach(element => {
    element.parentNode.removeChild(element)
});

//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//	Recuerda que no solo puedes insertar elementos con .appendChild.
var otherP = document.createElement("p")
otherP.innerText = "Voy en medio!"
document.body.insertBefore(otherP, myDiv3)

//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
var anotherP = document.createElement("p")
anotherP.innerText = "Voy dentro!"
let divToInsert = document.querySelector(".fn-insert-here")
divToInsert.appendChild(anotherP)