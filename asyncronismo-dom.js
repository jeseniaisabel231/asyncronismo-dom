//MANIPULACION DEL DOM
//Agregar elementos
//Crear un nuevo elemento
const buscador = document.querySelector('._45ks');
if (buscador) {
  const nuevoTexto = document.createTextNode("Hello React");
  buscador.appendChild(nuevoTexto);
} else {
  console.error('No se encontró el elemento con el id');
}
//Quitar elementos
const buscador2 = document.querySelector('._45ks')
buscador2.remove()

//Agregar eventos
const buscador3 = document.querySelector('._45ks')
const button = document.createElement("button")
button.innerText="BUTTON"
buscador.appendChild(button);

button.addEventListener('click',function () {
    alert("Abrir Popup")
})
