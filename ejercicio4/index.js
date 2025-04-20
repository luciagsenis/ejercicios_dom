//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click
const buttonClick = document.querySelector("#btnToClick");
buttonClick.onclick = function () {
    console.log("Botón pulsado")
}

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusElement = document.querySelector(".focus");
focusElement.addEventListener('focus', function() {
    console.log(focusElement.value);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputElement = document.querySelector(".value");
inputElement.addEventListener('input', function() {
    console.log(inputElement.value);
});