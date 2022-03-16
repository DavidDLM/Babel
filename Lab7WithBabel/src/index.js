import "core-js/stable";

import './assets/index.css';
import './paginas/historia.css';
import './paginas/musica.css';
import './paginas/sobremi.css';

import {crearHistoria} from './paginas/historia.js';
import {crearSobreMi} from './paginas/sobremi.js';
import {crearMusica} from './paginas/musica.js';

import waltz from "./assets/imagenes/VienneseWaltz.jpg";


let contenedor = document.getElementById("body-container");

let imagen = document.createElement('img');
imagen.style.width = '1000px';
imagen.style.height = '500px';
imagen.src = waltz;
contenedor.appendChild(imagen);



let lista = document.createElement('ul');

let option = document.createElement('li');
let a1 = document.createElement('a');
//a1.href = "./paginas/historia.html";
a1.addEventListener('click', historia);
a1.innerHTML = "Historia";
option.appendChild(a1);

let option2 = document.createElement('li');
let a2 = document.createElement('a');
//a2.href = "./paginas/sobremi.html";
a2.addEventListener('click', sobremi);
a2.innerHTML = "Sobre Mi";
option2.appendChild(a2);

let option3 = document.createElement('li');
let a3 = document.createElement('a');
//a3.href = "./paginas/musica.html";
a3.addEventListener('click', musica);
a3.innerHTML = "Musica";
option3.appendChild(a3);

lista.appendChild(option);
lista.appendChild(option2);
lista.appendChild(option3);


contenedor.appendChild(lista);

//******************** */
function historia(){
    crearHistoria();
}
function sobremi(){
    crearSobreMi();
}
function musica(){
    crearMusica();
}

//**********Polifylls********** */
const aviso = "        Mi historia".trimStart();
console.log(aviso);
