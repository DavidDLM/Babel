import {cuadrado} from '../assets/tools/cuadrado.js'

export const crearSobreMi = () => {
    let contenedor1 = document.getElementById("body-container");
    contenedor1.innerHTML = '';

    let contenedor = document.createElement("div");
    contenedor.id = 'sobremi-contenedor';

    contenedor = cuadrado('Sobre Mi', contenedor, '#4D77FF');
    contenedor1.appendChild(contenedor);
}