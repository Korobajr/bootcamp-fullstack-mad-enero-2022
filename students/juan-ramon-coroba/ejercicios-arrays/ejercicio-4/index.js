/*Crear una función que reciba un parámetro de entrada y que imprima 
por pantalla true si el parámetro es un array y false si es otro tipo de dato.(easy)*/
let arr = ['moco']

let conct
function compIfArray (a){
    let type = typeof a
    return type === 'object';
}

document.write(compIfArray('hola'))