/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/imagenes/Nicola_Vals.mp3":
/*!*********************************************!*\
  !*** ./src/assets/imagenes/Nicola_Vals.mp3 ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/e4d6a8cddeff90b5aee3093636b698c0.mp3");

/***/ }),

/***/ "./src/assets/imagenes/VienneseWaltz.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imagenes/VienneseWaltz.jpg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/65f782f3bfcfd141507d2d241cf1d507.jpg");

/***/ }),

/***/ "./src/assets/index.css":
/*!******************************!*\
  !*** ./src/assets/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/paginas/historia.css":
/*!**********************************!*\
  !*** ./src/paginas/historia.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/paginas/musica.css":
/*!********************************!*\
  !*** ./src/paginas/musica.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/paginas/sobremi.css":
/*!*********************************!*\
  !*** ./src/paginas/sobremi.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/tools/cuadrado.js":
/*!**************************************!*\
  !*** ./src/assets/tools/cuadrado.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cuadrado": () => (/* binding */ cuadrado)
/* harmony export */ });
const  cuadrado = (title, contenedor, color) =>{
    let cuadrado = document.createElement('div');
    cuadrado.style.width = '200px';
    cuadrado.style.height = '200px';
    cuadrado.style.backgroundColor = color;
    cuadrado.innerHTML = title;
    cuadrado.style.border = '1px solid black';
    contenedor.appendChild(cuadrado);
    return contenedor;
}



/***/ }),

/***/ "./src/paginas/historia.js":
/*!*********************************!*\
  !*** ./src/paginas/historia.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crearHistoria": () => (/* binding */ crearHistoria)
/* harmony export */ });
/* harmony import */ var _assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/tools/cuadrado.js */ "./src/assets/tools/cuadrado.js");


const crearHistoria = () => {
    let contenedor1 = document.getElementById("body-container");
    contenedor1.innerHTML = '';
    
    let contenedor = document.createElement("div");
    contenedor.id = 'historia-contenedor';
    
    contenedor = (0,_assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__.cuadrado)('Historia', contenedor, 'red');
    contenedor1.appendChild(contenedor);
}




/***/ }),

/***/ "./src/paginas/musica.js":
/*!*******************************!*\
  !*** ./src/paginas/musica.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crearMusica": () => (/* binding */ crearMusica)
/* harmony export */ });
/* harmony import */ var _assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/tools/cuadrado.js */ "./src/assets/tools/cuadrado.js");
/* harmony import */ var _assets_imagenes_Nicola_Vals_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/imagenes/Nicola_Vals.mp3 */ "./src/assets/imagenes/Nicola_Vals.mp3");



const crearMusica = () => {
    let contenedor1 = document.getElementById("body-container");
    contenedor1.innerHTML = '';

    let contenedor = document.createElement("div");
    contenedor.id = 'musica-contenedor';
    contenedor = (0,_assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__.cuadrado)('Musica', contenedor, '#F2FA5A');

    let audio = document.createElement('audio');
    audio.style.width = '500px';
    audio.style.height = '75px';
    audio.controls = true;
    audio.autoplay = true;
    audio.src = _assets_imagenes_Nicola_Vals_mp3__WEBPACK_IMPORTED_MODULE_1__["default"];
    contenedor.appendChild(audio);
   
    contenedor1.appendChild(contenedor);
}

/***/ }),

/***/ "./src/paginas/sobremi.js":
/*!********************************!*\
  !*** ./src/paginas/sobremi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crearSobreMi": () => (/* binding */ crearSobreMi)
/* harmony export */ });
/* harmony import */ var _assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/tools/cuadrado.js */ "./src/assets/tools/cuadrado.js");


const crearSobreMi = () => {
    let contenedor1 = document.getElementById("body-container");
    contenedor1.innerHTML = '';

    let contenedor = document.createElement("div");
    contenedor.id = 'sobremi-contenedor';

    contenedor = (0,_assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__.cuadrado)('Sobre Mi', contenedor, '#4D77FF');
    contenedor1.appendChild(contenedor);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/index.css */ "./src/assets/index.css");
/* harmony import */ var _paginas_historia_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginas/historia.css */ "./src/paginas/historia.css");
/* harmony import */ var _paginas_musica_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paginas/musica.css */ "./src/paginas/musica.css");
/* harmony import */ var _paginas_sobremi_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginas/sobremi.css */ "./src/paginas/sobremi.css");
/* harmony import */ var _paginas_historia_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paginas/historia.js */ "./src/paginas/historia.js");
/* harmony import */ var _paginas_sobremi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paginas/sobremi.js */ "./src/paginas/sobremi.js");
/* harmony import */ var _paginas_musica_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginas/musica.js */ "./src/paginas/musica.js");
/* harmony import */ var _assets_imagenes_VienneseWaltz_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/imagenes/VienneseWaltz.jpg */ "./src/assets/imagenes/VienneseWaltz.jpg");












let contenedor = document.getElementById("body-container");

let imagen = document.createElement('img');
imagen.style.width = '1000px';
imagen.style.height = '500px';
imagen.src = _assets_imagenes_VienneseWaltz_jpg__WEBPACK_IMPORTED_MODULE_7__["default"];
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
    (0,_paginas_historia_js__WEBPACK_IMPORTED_MODULE_4__.crearHistoria)();
}
function sobremi(){
    (0,_paginas_sobremi_js__WEBPACK_IMPORTED_MODULE_5__.crearSobreMi)();
}
function musica(){
    (0,_paginas_musica_js__WEBPACK_IMPORTED_MODULE_6__.crearMusica)();
}

//******************** */
})();

/******/ })()
;