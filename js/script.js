//Elementos del DOM
const titulo = document.getElementById('titulo');
const btnCambiarTexto = document.getElementById('btnCambiarTexto');
const btnCambiarEstilo = document.getElementById('btnCambiarEstilo');
const btnAgregarElemento = document.getElementById('btnAgregarElemento');
const contenedor = document.getElementById('contenedor');

//Cambiar el texto del título
btnCambiarTexto.addEventListener('click', () => {
    titulo.textContent = '¡Texto cambiado!';
});

//Cambiar el estilo del título
btnCambiarEstilo.addEventListener('click', () => {
    titulo.classList.toggle('highlight');
});

//Agregar un nuevo elemento al contenedor
btnAgregarElemento.addEventListener('click', () => {
    const nuevoElemento = document.createElement('p');
    nuevoElemento.textContent = 'Nuevo elemento agregado al DOM';
    contenedor.appendChild(nuevoElemento);
});
