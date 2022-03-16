import {cuadrado} from '../assets/tools/cuadrado.js'
import nic from '../assets/imagenes/Nicola_Vals.mp3'

export const crearMusica = () => {
    let contenedor1 = document.getElementById("body-container");
    contenedor1.innerHTML = '';

    let contenedor = document.createElement("div");
    contenedor.id = 'musica-contenedor';
    contenedor = cuadrado('Musica', contenedor, '#F2FA5A');

    let audio = document.createElement('audio');
    audio.style.width = '500px';
    audio.style.height = '75px';
    audio.controls = true;
    audio.autoplay = true;
    audio.src = nic;
    contenedor.appendChild(audio);
   
    contenedor1.appendChild(contenedor);
}