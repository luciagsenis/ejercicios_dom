//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
var countriesUl = document.createElement("ul")
for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const li = document.createElement("li");
    li.textContent = country
    countriesUl.appendChild(li)
}
document.body.appendChild(countriesUl)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let removeElements = document.querySelectorAll(".fn-remove-me")
removeElements.forEach(element => {
    element.parentNode.removeChild(element)
});

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let divToPrint = document.querySelector('[data-function="printHere"]')
var carsUl = document.createElement("ul")
for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    const li = document.createElement("li");
    li.textContent = car
    carsUl.appendChild(li)
}
divToPrint.appendChild(carsUl)

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
//h4 para el titulo y otro elemento img para la imagen.

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//divs que elimine ese mismo elemento del html.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(var i=0; i<countries2.length; i++){
    const container = document.createElement("div")
    const title = document.createElement("h4")
    const image = document.createElement("img")
    const removeButton = document.createElement("button")
    title.innerText = countries2[i].title
    image.src = countries2[i].imgUrl
    container.appendChild(image)
    container.appendChild(title)

    removeButton.innerText = "Remove div"; 
    removeButton.onclick = function() {
        container.parentNode.removeChild(container);
    };
    container.appendChild(removeButton)
    document.body.appendChild(container)
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.
const removeButton = document.createElement("button")
const divList = document.querySelectorAll("div")
removeButton.innerText = "Remove last div"
removeButton.onclick = function() {
    document.body.removeChild(divList[divList.length - 1])
}
document.body.appendChild(removeButton)




