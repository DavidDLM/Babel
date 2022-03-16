import { cuadrado } from "../assets/tools/cuadrado.js";

export const crearHistoria = () => {
    let contenedor1 = document.getElementById("body-container");
    contenedor1.innerHTML = '';
    
    let contenedor = document.createElement("div");
    contenedor.id = 'historia-contenedor';
    
    contenedor = cuadrado('Historia', contenedor, 'red');
    contenedor1.appendChild(contenedor);
}


