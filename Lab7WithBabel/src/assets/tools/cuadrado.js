export const  cuadrado = (title, contenedor, color) =>{
    let cuadrado = document.createElement('div');
    cuadrado.style.width = '200px';
    cuadrado.style.height = '200px';
    cuadrado.style.backgroundColor = color;
    cuadrado.innerHTML = title;
    cuadrado.style.border = '1px solid black';
    contenedor.appendChild(cuadrado);
    return contenedor;
}

